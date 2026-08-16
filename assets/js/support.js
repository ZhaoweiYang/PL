/*!
 * PleasureLab — Support Center
 *
 * Three request types share one engine: declarative validation driven by markup,
 * a screenshot uploader used by the two billing forms, and a submit step that
 * degrades to a copyable email draft when no form endpoint is configured.
 */
(function (global) {
  'use strict';

  var cfg = global.PL_CONFIG || {};
  var site = global.PLSite;
  var MAX_MB = Number(cfg.maxUploadMB) || 5;
  var MAX_BYTES = MAX_MB * 1024 * 1024;
  var ACCEPTED = cfg.acceptedUploadTypes || [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif'
  ];

  var FORM_TYPES = ['suggestion', 'refund', 'cancel'];
  var uploaders = {};
  var lastTicket = null; // kept so the email fallback can re-render on locale change

  /* ------------------------------------------------------------- helpers */

  function t(key, vars) {
    return site.t(key, vars);
  }

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $$(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  /** Ticket references are generated client-side so the reader always leaves
   *  with something to quote, endpoint or not. */
  function makeTicketId(type) {
    var prefix = { suggestion: 'SG', refund: 'RF', cancel: 'CX' }[type] || 'PL';
    var stamp = Date.now().toString(36).toUpperCase().slice(-6);
    var rand = '';
    var alphabet = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
    var bytes = new Uint8Array(4);
    (global.crypto || global.msCrypto).getRandomValues(bytes);
    for (var i = 0; i < 4; i++) rand += alphabet[bytes[i] % alphabet.length];
    return 'PL-' + prefix + '-' + stamp + '-' + rand;
  }

  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
  }

  /* ---------------------------------------------------------- validation */

  function errorNodeFor(control) {
    // `.check` is deliberately not in this list: the label wraps the input but
    // the error node is its sibling, one level up in `.field`.
    var field = control.closest('.field, .upload-field');
    return field ? $('[data-error]', field) : null;
  }

  function showError(control, key, vars) {
    var node = errorNodeFor(control);
    if (node) {
      node.setAttribute('data-i18n', key);
      if (vars) node.setAttribute('data-i18n-vars', JSON.stringify(vars));
      else node.removeAttribute('data-i18n-vars');
      node.textContent = t(key, vars);
      node.setAttribute('data-shown', 'true');
    }
    if (control.classList.contains('upload__input')) {
      var box = control.closest('.upload');
      if (box) box.setAttribute('aria-invalid', 'true');
    } else {
      control.setAttribute('aria-invalid', 'true');
    }
  }

  function clearError(control) {
    var node = errorNodeFor(control);
    if (node) {
      node.removeAttribute('data-shown');
      node.removeAttribute('data-i18n');
      node.removeAttribute('data-i18n-vars');
      node.textContent = '';
    }
    control.removeAttribute('aria-invalid');
    var box = control.closest('.upload');
    if (box) box.removeAttribute('aria-invalid');
  }

  /**
   * Validate one form. Returns the first invalid control, or null.
   * Rules come from the markup: `required`, `type="email"`, and
   * `data-require-file` on the uploader.
   */
  function validate(form) {
    var firstInvalid = null;
    var controls = $$('input, select, textarea', form);

    controls.forEach(function (control) {
      if (control.type === 'hidden' || control.name === '_hp') return;
      clearError(control);

      var value = control.type === 'checkbox' ? control.checked : String(control.value || '').trim();

      if (control.type === 'file') {
        var uploader = uploaders[control.id];
        if (control.hasAttribute('data-require-file') && (!uploader || !uploader.file)) {
          showError(control, 'support.errFileRequired');
          firstInvalid = firstInvalid || control;
        }
        return;
      }

      if (control.required && !value) {
        showError(control, control.type === 'checkbox' ? 'support.errConsent' : 'support.errRequired');
        firstInvalid = firstInvalid || control;
        return;
      }

      if (control.type === 'email' && value && !isEmail(value)) {
        showError(control, 'support.errEmail');
        firstInvalid = firstInvalid || control;
      }
    });

    return firstInvalid;
  }

  /* ------------------------------------------------------------ uploader */

  function initUploader(input) {
    var box = input.closest('.upload');
    var preview = $('[data-preview]', box.parentNode);
    var thumb = $('[data-preview-thumb]', preview);
    var nameEl = $('[data-preview-name]', preview);
    var sizeEl = $('[data-preview-size]', preview);
    var chooser = $('[data-upload-chooser]', box);
    var state = { file: null, objectUrl: null };

    uploaders[input.id] = state;

    function reset() {
      if (state.objectUrl) {
        URL.revokeObjectURL(state.objectUrl);
        state.objectUrl = null;
      }
      state.file = null;
      input.value = '';
      preview.hidden = true;
      box.hidden = false;
      thumb.removeAttribute('src');
    }

    function accept(file) {
      clearError(input);

      if (ACCEPTED.indexOf(file.type) === -1) {
        // HEIC from iOS occasionally arrives with an empty type; fall back to
        // the extension before rejecting a legitimate screenshot.
        if (!/\.(jpe?g|png|webp|heic|heif)$/i.test(file.name)) {
          showError(input, 'support.errFileType');
          return;
        }
      }
      if (file.size > MAX_BYTES) {
        showError(input, 'support.errFileSize', { max: MAX_MB });
        return;
      }

      if (state.objectUrl) URL.revokeObjectURL(state.objectUrl);
      state.file = file;
      state.objectUrl = URL.createObjectURL(file);

      thumb.src = state.objectUrl;
      thumb.alt = file.name;
      nameEl.textContent = file.name;
      sizeEl.textContent = formatBytes(file.size);
      preview.hidden = false;
      box.hidden = true;
    }

    chooser.addEventListener('click', function () {
      input.click();
    });

    input.addEventListener('change', function () {
      if (input.files && input.files[0]) accept(input.files[0]);
    });

    ['dragenter', 'dragover'].forEach(function (type) {
      box.addEventListener(type, function (event) {
        event.preventDefault();
        box.setAttribute('data-dragover', 'true');
      });
    });

    ['dragleave', 'drop'].forEach(function (type) {
      box.addEventListener(type, function (event) {
        event.preventDefault();
        box.removeAttribute('data-dragover');
      });
    });

    box.addEventListener('drop', function (event) {
      var dt = event.dataTransfer;
      if (dt && dt.files && dt.files[0]) accept(dt.files[0]);
    });

    $('[data-upload-replace]', preview).addEventListener('click', function () {
      input.click();
    });

    $('[data-upload-remove]', preview).addEventListener('click', function () {
      reset();
      input.focus();
    });

    return state;
  }

  /* -------------------------------------------------------------- payload */

  /** Collect a form into an ordered list of {labelKey, value} for display and
   *  an object for transport. Fields opt in with data-summary="<i18n key>". */
  function collect(form) {
    var rows = [];
    var data = {};

    $$('[data-summary]', form).forEach(function (control) {
      if (control.name === '_hp') return;
      var labelKey = control.getAttribute('data-summary');
      var value; // what the endpoint receives
      var shown; // what the reader sees in the summary

      if (control.type === 'checkbox') {
        value = t(control.checked ? 'common.yes' : 'common.no');
        // An unticked optional box is not worth a line of its own.
        shown = control.checked ? value : '';
      } else if (control.tagName === 'SELECT') {
        var opt = control.options[control.selectedIndex];
        value = opt ? opt.textContent.trim() : '';
        shown = value;
      } else if (control.type === 'file') {
        var st = uploaders[control.id];
        value = st && st.file ? st.file.name + ' (' + formatBytes(st.file.size) + ')' : '';
        shown = value;
      } else {
        value = String(control.value || '').trim();
        shown = value;
      }

      data[control.name] = value;
      // `data-summary-quiet` fields still reach the endpoint but stay out of the
      // human-readable summary — the consent sentence would swamp it.
      if (shown && !control.hasAttribute('data-summary-quiet')) {
        rows.push({ labelKey: labelKey, value: shown });
      }
    });

    return { rows: rows, data: data };
  }

  function renderSummaryText(ticket) {
    var lines = [];
    lines.push(t('support.' + ticket.tabKey) + ' — ' + t('support.okTicket') + ': ' + ticket.id);
    lines.push('');
    ticket.rows.forEach(function (row) {
      lines.push(t(row.labelKey) + ': ' + row.value);
    });
    lines.push('');
    lines.push('Locale: ' + site.lang);
    return lines.join('\n');
  }

  /* --------------------------------------------------------------- submit */

  function buildFormData(form, ticket) {
    var fd = new FormData();
    if (cfg.formAccessKey) fd.append(cfg.formAccessKeyField || 'access_key', cfg.formAccessKey);

    fd.append('ticket_id', ticket.id);
    fd.append('request_type', ticket.type);
    fd.append('locale', site.lang);
    fd.append('subject', '[' + ticket.id + '] ' + t('support.' + ticket.tabKey));
    fd.append('page', global.location.href);

    Object.keys(ticket.data).forEach(function (key) {
      fd.append(key, ticket.data[key]);
    });

    // Providers differ on the attachment field name; send both aliases.
    var fileInput = $('input[type="file"]', form);
    if (fileInput) {
      var state = uploaders[fileInput.id];
      if (state && state.file) {
        fd.append('attachment', state.file, state.file.name);
        fd.append('billing_screenshot', state.file, state.file.name);
      }
    }

    return fd;
  }

  function showResult(panel, ticket, offline) {
    var result = $('[data-result]', panel);
    var formWrap = $('[data-form-wrap]', panel);

    $('[data-result-body]', result).setAttribute('data-i18n', ticket.successKey);
    $('[data-result-body]', result).textContent = t(ticket.successKey);
    $('[data-ticket-code]', result).textContent = ticket.id;

    var fallback = $('[data-fallback]', result);
    if (offline) {
      $('[data-fallback-pre]', fallback).textContent = renderSummaryText(ticket);
      var body = $('[data-fallback-body]', fallback);
      body.setAttribute('data-i18n', 'support.fbBody');
      body.setAttribute('data-i18n-vars', JSON.stringify({ email: cfg.supportEmail }));
      body.textContent = t('support.fbBody', { email: cfg.supportEmail });
      fallback.hidden = false;
    } else {
      fallback.hidden = true;
    }

    formWrap.hidden = true;
    result.hidden = false;
    site.apply(panel);
    result.setAttribute('tabindex', '-1');
    result.focus();
  }

  function resetPanel(panel) {
    var form = $('form', panel);
    form.reset();
    $$('input[type="file"]', form).forEach(function (input) {
      var remove = $('[data-upload-remove]', input.closest('.upload-field'));
      if (remove) remove.click();
    });
    $$('[data-error]', form).forEach(function (node) {
      node.removeAttribute('data-shown');
      node.textContent = '';
    });
    $$('[aria-invalid]', form).forEach(function (node) {
      node.removeAttribute('aria-invalid');
    });
    $('[data-result]', panel).hidden = true;
    $('[data-form-wrap]', panel).hidden = false;
    $('[data-form-alert]', panel).hidden = true;
  }

  function initForm(panel) {
    var form = $('form', panel);
    var type = panel.getAttribute('data-type');
    var submitBtn = $('[data-submit]', form);
    var submitLabel = $('[data-submit-label]', submitBtn);
    var alertBox = $('[data-form-alert]', panel);
    var alertText = $('[data-form-alert-text]', alertBox);

    var meta = {
      suggestion: { tabKey: 'tabSuggestion', successKey: 'support.okBodySuggestion' },
      refund: { tabKey: 'tabRefund', successKey: 'support.okBodyRefund' },
      cancel: { tabKey: 'tabCancel', successKey: 'support.okBodyCancel' }
    }[type];

    $$('input, select, textarea', form).forEach(function (control) {
      control.addEventListener('input', function () {
        if (control.getAttribute('aria-invalid') === 'true') clearError(control);
      });
      control.addEventListener('change', function () {
        if (control.getAttribute('aria-invalid') === 'true') clearError(control);
      });
    });

    function flashAlert(key) {
      alertText.setAttribute('data-i18n', key);
      alertText.textContent = t(key);
      alertBox.hidden = false;
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Bots fill everything; humans never see this field.
      if (form.elements._hp && form.elements._hp.value) return;

      var invalid = validate(form);
      if (invalid) {
        flashAlert('support.errSummary');
        invalid.focus({ preventScroll: false });
        return;
      }
      alertBox.hidden = true;

      var collected = collect(form);
      var ticket = {
        id: makeTicketId(type),
        type: type,
        tabKey: meta.tabKey,
        successKey: meta.successKey,
        rows: collected.rows,
        data: collected.data
      };
      lastTicket = { ticket: ticket, panel: panel };

      if (!cfg.formEndpoint) {
        showResult(panel, ticket, true);
        return;
      }

      submitBtn.disabled = true;
      submitLabel.setAttribute('data-i18n', 'support.submitting');
      submitLabel.textContent = t('support.submitting');

      fetch(cfg.formEndpoint, {
        method: 'POST',
        body: buildFormData(form, ticket),
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (!response.ok) throw new Error('HTTP ' + response.status);
          showResult(panel, ticket, false);
        })
        .catch(function () {
          flashAlert('support.errNetwork');
          showResult(panel, ticket, true);
        })
        .then(function () {
          submitBtn.disabled = false;
          submitLabel.setAttribute('data-i18n', 'support.submit');
          submitLabel.textContent = t('support.submit');
        });
    });

    $('[data-clear]', form).addEventListener('click', function () {
      resetPanel(panel);
    });

    $('[data-another]', panel).addEventListener('click', function () {
      resetPanel(panel);
      form.querySelector('input, select, textarea').focus();
    });

    /* ticket + summary clipboard actions */

    function copyText(text, button, doneKey, restoreKey) {
      var done = function () {
        button.setAttribute('data-i18n', doneKey);
        button.textContent = t(doneKey);
        global.setTimeout(function () {
          button.setAttribute('data-i18n', restoreKey);
          button.textContent = t(restoreKey);
        }, 2000);
      };

      if (global.navigator.clipboard && global.isSecureContext) {
        global.navigator.clipboard.writeText(text).then(done, function () {
          legacyCopy(text);
          done();
        });
      } else {
        legacyCopy(text);
        done();
      }
    }

    function legacyCopy(text) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch (e) {
        /* nothing else to try */
      }
      document.body.removeChild(ta);
    }

    $('[data-copy-ticket]', panel).addEventListener('click', function (event) {
      copyText($('[data-ticket-code]', panel).textContent, event.currentTarget, 'support.okCopied', 'support.okCopy');
    });

    $('[data-copy-summary]', panel).addEventListener('click', function (event) {
      copyText($('[data-fallback-pre]', panel).textContent, event.currentTarget, 'support.fbCopied', 'support.fbCopy');
    });

    $('[data-download-summary]', panel).addEventListener('click', function () {
      var text = $('[data-fallback-pre]', panel).textContent;
      var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = ($('[data-ticket-code]', panel).textContent || 'pleasurelab-ticket') + '.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      global.setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 1000);
    });

    $('[data-mail-summary]', panel).addEventListener('click', function () {
      var subject = '[' + $('[data-ticket-code]', panel).textContent + '] ' + t('support.' + meta.tabKey);
      var body = $('[data-fallback-pre]', panel).textContent + '\n\n' + t('support.fbAttach');
      global.location.href =
        'mailto:' +
        encodeURIComponent(cfg.supportEmail) +
        '?subject=' +
        encodeURIComponent(subject) +
        '&body=' +
        encodeURIComponent(body);
    });
  }

  /* ----------------------------------------------------------------- tabs */

  function initTabs() {
    var tabs = $$('[data-tab]');
    var panels = $$('[data-type]');

    function select(type, focus, updateHash) {
      tabs.forEach(function (tab) {
        var on = tab.getAttribute('data-tab') === type;
        tab.setAttribute('aria-selected', on ? 'true' : 'false');
        tab.setAttribute('tabindex', on ? '0' : '-1');
        if (on && focus) tab.focus();
      });
      panels.forEach(function (panel) {
        panel.hidden = panel.getAttribute('data-type') !== type;
      });
      // Only rewrite the hash for a deliberate switch, so a plain visit keeps
      // the URL the reader arrived with.
      if (updateHash && global.history && global.history.replaceState) {
        global.history.replaceState(null, '', '#' + type);
      }
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        select(tab.getAttribute('data-tab'), false, true);
      });

      tab.addEventListener('keydown', function (event) {
        var index = FORM_TYPES.indexOf(tab.getAttribute('data-tab'));
        var next = null;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % FORM_TYPES.length;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp')
          next = (index - 1 + FORM_TYPES.length) % FORM_TYPES.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = FORM_TYPES.length - 1;
        if (next === null) return;
        event.preventDefault();
        select(FORM_TYPES[next], true, true);
      });
    });

    // Deep links: #refund, ?type=cancel — both are handy from an app or an email.
    var initial = (global.location.hash || '').replace('#', '');
    if (FORM_TYPES.indexOf(initial) === -1) {
      try {
        initial = new URLSearchParams(global.location.search).get('type') || '';
      } catch (e) {
        initial = '';
      }
    }
    select(FORM_TYPES.indexOf(initial) !== -1 ? initial : 'suggestion', false, false);

    // A link to #refund from elsewhere on this same page is a fragment
    // navigation, not a reload — so the tab has to follow the hash.
    global.addEventListener('hashchange', function () {
      var next = (global.location.hash || '').replace('#', '');
      if (FORM_TYPES.indexOf(next) !== -1) select(next, false, false);
    });
  }

  /* ----------------------------------------------------------------- boot */

  function boot() {
    $$('.upload__input').forEach(initUploader);
    $$('[data-type]').forEach(initForm);
    initTabs();

    // Upload copy carries the size limit, which lives in config, not the dictionary.
    $$('[data-upload-help]').forEach(function (node) {
      node.setAttribute('data-i18n', 'support.uploadHelp');
      node.setAttribute('data-i18n-vars', JSON.stringify({ max: MAX_MB }));
    });

    var accept = ACCEPTED.join(',');
    $$('.upload__input').forEach(function (input) {
      input.setAttribute('accept', accept + ',image/*');
    });

    // A locale switch after submitting must re-render the generated summary too.
    site.onLangChange(function () {
      if (!lastTicket) return;
      var pre = $('[data-fallback-pre]', lastTicket.panel);
      if (pre && !$('[data-fallback]', lastTicket.panel).hidden) {
        pre.textContent = renderSummaryText(lastTicket.ticket);
      }
    });

    site.apply(document);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})(window);
