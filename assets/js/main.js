/*!
 * PleasureLab — shared shell behaviour: locale, theme, navigation.
 *
 * Locale resolution order is ?lang= → saved choice → browser preference → English,
 * and the same rule drives the theme (?theme= is not supported; the picker and
 * the OS setting are enough).
 */
(function (global) {
  'use strict';

  var i18n = global.PLi18n;
  var THEME_KEY = 'pl.theme';
  var listeners = [];
  var current = i18n.detect().lang;

  /* ------------------------------------------------------------ helpers */

  function attrTargets(el) {
    // data-i18n-placeholder="foo.bar" → sets the placeholder attribute.
    var out = [];
    for (var i = 0; i < el.attributes.length; i++) {
      var attr = el.attributes[i];
      if (attr.name.indexOf('data-i18n-') !== 0) continue;
      var name = attr.name.slice('data-i18n-'.length);
      if (name === 'vars') continue;
      out.push({ attr: name, key: attr.value });
    }
    return out;
  }

  function vars(el) {
    // data-i18n-vars='{"max":5}'
    var raw = el.getAttribute('data-i18n-vars');
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  /** Translate one subtree. Called on load, on locale change, and after
   *  any dynamic markup is inserted. */
  function apply(root) {
    var scope = root || document;

    var nodes = scope.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = i18n.t(current, nodes[i].getAttribute('data-i18n'), vars(nodes[i]));
    }

    var attrNodes = scope.querySelectorAll(
      '[data-i18n-placeholder],[data-i18n-aria-label],[data-i18n-title],[data-i18n-content],[data-i18n-value]'
    );
    for (var j = 0; j < attrNodes.length; j++) {
      var el = attrNodes[j];
      var v = vars(el);
      var targets = attrTargets(el);
      for (var k = 0; k < targets.length; k++) {
        el.setAttribute(targets[k].attr, i18n.t(current, targets[k].key, v));
      }
    }
  }

  function applyDocumentMeta() {
    var meta = document.documentElement.getAttribute('data-page') === 'support' ? 'support' : 'home';
    document.documentElement.lang = i18n.t(current, 'meta.htmlLang');
    document.title = i18n.t(current, meta === 'support' ? 'meta.supportTitle' : 'meta.homeTitle');

    var desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute('content', i18n.t(current, meta === 'support' ? 'meta.supportDesc' : 'meta.homeDesc'));
    }
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', document.title);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && desc) ogDesc.setAttribute('content', desc.getAttribute('content'));
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', current.replace('-', '_'));
  }

  /* -------------------------------------------------------------- locale */

  function setLang(lang, persist) {
    if (i18n.supported.indexOf(lang) === -1) return;
    current = lang;

    if (persist !== false) {
      try {
        global.localStorage.setItem(i18n.storageKey, lang);
      } catch (e) {
        /* private mode — the choice just will not survive a reload */
      }
    }

    apply(document);
    applyDocumentMeta();
    syncLangPickers();

    for (var i = 0; i < listeners.length; i++) listeners[i](lang);
  }

  function syncLangPickers() {
    var pickers = document.querySelectorAll('[data-lang-picker]');
    for (var i = 0; i < pickers.length; i++) {
      if (pickers[i].value !== current) pickers[i].value = current;
    }
  }

  function buildLangPickers() {
    var pickers = document.querySelectorAll('[data-lang-picker]');
    for (var i = 0; i < pickers.length; i++) {
      var select = pickers[i];
      select.innerHTML = '';
      for (var j = 0; j < i18n.supported.length; j++) {
        var code = i18n.supported[j];
        var opt = document.createElement('option');
        opt.value = code;
        // Each locale is labelled in its own language — that is the whole point
        // of a language picker for someone who cannot read the current one.
        opt.textContent = i18n.t(code, 'meta.name');
        select.appendChild(opt);
      }
      select.value = current;
      select.addEventListener('change', function (event) {
        setLang(event.target.value, true);
      });
    }
  }

  /* --------------------------------------------------------------- theme */

  function storedTheme() {
    try {
      var v = global.localStorage.getItem(THEME_KEY);
      return v === 'light' || v === 'dark' ? v : 'system';
    } catch (e) {
      return 'system';
    }
  }

  function setTheme(mode, persist) {
    if (mode === 'system') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', mode);
    }

    if (persist !== false) {
      try {
        if (mode === 'system') global.localStorage.removeItem(THEME_KEY);
        else global.localStorage.setItem(THEME_KEY, mode);
      } catch (e) {
        /* ignore */
      }
    }

    var pickers = document.querySelectorAll('[data-theme-picker]');
    for (var i = 0; i < pickers.length; i++) {
      if (pickers[i].value !== mode) pickers[i].value = mode;
    }
  }

  function buildThemePickers() {
    var mode = storedTheme();
    var pickers = document.querySelectorAll('[data-theme-picker]');
    for (var i = 0; i < pickers.length; i++) {
      pickers[i].value = mode;
      pickers[i].addEventListener('change', function (event) {
        setTheme(event.target.value, true);
      });
    }
    setTheme(mode, false);
  }

  /* ---------------------------------------------------------- navigation */

  function initNav() {
    var header = document.querySelector('[data-header]');
    var toggle = document.querySelector('[data-nav-toggle]');
    if (!header || !toggle) return;

    toggle.addEventListener('click', function () {
      var open = header.getAttribute('data-open') === 'true';
      header.setAttribute('data-open', open ? 'false' : 'true');
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
    });

    header.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        header.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function initStoreLinks() {
    var cfg = global.PL_CONFIG || {};
    var links = document.querySelectorAll('[data-store="ios"]');
    var i;
    for (i = 0; i < links.length; i++) {
      if (cfg.appStoreUrl) links[i].href = cfg.appStoreUrl;
    }
    var play = document.querySelectorAll('[data-store="android"]');
    for (i = 0; i < play.length; i++) {
      if (cfg.googlePlayUrl) play[i].href = cfg.googlePlayUrl;
    }
    var mails = document.querySelectorAll('[data-support-email]');
    for (i = 0; i < mails.length; i++) {
      var address = cfg.supportEmail || 'support@pleasurelab.app';
      mails[i].href = 'mailto:' + address;
      if (mails[i].hasAttribute('data-support-email-text')) mails[i].textContent = address;
    }
  }

  /* ---------------------------------------------------------------- boot */

  function boot() {
    buildLangPickers();
    buildThemePickers();
    initNav();
    initStoreLinks();
    apply(document);
    applyDocumentMeta();
    document.documentElement.setAttribute('data-booted', 'true');
  }

  global.PLSite = {
    get lang() {
      return current;
    },
    setLang: setLang,
    setTheme: setTheme,
    apply: apply,
    t: function (key, v) {
      return i18n.t(current, key, v);
    },
    onLangChange: function (fn) {
      listeners.push(fn);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})(window);
