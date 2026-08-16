# PleasureLab — website

Marketing site and Support Center for **PleasureLab**, an evidence-based intimacy
education app for adults. Static HTML, CSS and vanilla JavaScript: no framework,
no build step, no dependencies to install.

```
index.html          Landing page
support.html        Support Center (3 request types)
assets/css/main.css Design tokens + all layout
assets/js/config.js ← the only file an operator normally edits
assets/js/i18n.js   Translation dictionary + locale detection
assets/js/main.js   Shell: locale, theme, navigation
assets/js/support.js Support Center: tabs, validation, uploads, submission
.github/workflows/deploy.yml  GitHub Pages deployment
```

## Languages

Three locales ship in `assets/js/i18n.js`: **English**, **日本語** and **繁體中文**.

The locale is resolved in this order, and the reader can always override it with
the picker in the header:

1. `?lang=ja` in the URL
2. A previous choice saved in `localStorage`
3. `navigator.languages` — `ja*` → Japanese, `zh-Hant` / `zh-TW` / `zh-HK` / `zh-MO`
   → Traditional Chinese, `en*` → English
4. English as the fallback

`zh-CN` / `zh-Hans` deliberately falls through to English rather than being served
Traditional characters it did not ask for. Add Simplified Chinese by adding a
`'zh-Hans'` block to `DICT` and listing it in `SUPPORTED`.

Colour scheme follows the same idea: it tracks the OS `prefers-color-scheme`
setting by default, and the header's theme picker pins light or dark.

### Adding or editing copy

Every translatable string lives in `DICT` in `assets/js/i18n.js` and is referenced
from the markup by a dotted key:

```html
<h2 data-i18n="features.title">What is inside</h2>
<input data-i18n-placeholder="support.emailPlaceholder" />
<p data-i18n="support.uploadHelp" data-i18n-vars='{"max":5}'></p>
```

The English text in the HTML is only a fallback for the moment before scripts
run. A missing key falls back to English, then to the key itself.

## Support Center

`support.html` has three request types, deep-linkable as `support.html#suggestion`,
`#refund` and `#cancel` (or `?type=refund`):

| Request | Required fields |
| --- | --- |
| Product suggestion | Category, details, consent |
| Refund request | **Email**, platform, reason, **billing screenshot**, consent |
| Cancel subscription | **Email**, plan, platform, reason, **billing screenshot**, consent |

Both billing forms require the email address used for the purchase and a
screenshot of the charge — validated client-side for type (JPG/PNG/WebP/HEIC) and
size, previewed before submission, and attachable by click or drag-and-drop.
Every submission produces a ticket reference (`PL-RF-…`) the reader can copy.

### Wiring up submissions

A static site has no server, so ticket delivery is delegated to a form backend.
Set it in `assets/js/config.js`:

```js
window.PL_CONFIG = {
  supportEmail: 'support@pleasurelab.app',
  formEndpoint: 'https://api.web3forms.com/submit',
  formAccessKey: 'your-public-access-key',
  formAccessKeyField: 'access_key',
  maxUploadMB: 5
};
```

The form POSTs `multipart/form-data` containing every field plus the screenshot
(sent under both `attachment` and `billing_screenshot`, since providers disagree
on the name). Anything that accepts a browser multipart POST works — Web3Forms,
Formspree (`https://formspree.io/f/xxxxxxxx`, leave `formAccessKey` empty), or your
own Cloudflare Worker / Lambda.

**Check that your plan accepts file uploads.** Several providers gate attachments
behind a paid tier; if yours does, the screenshot will be dropped even though the
text fields arrive.

**With `formEndpoint` left empty — the default — the site runs in email-fallback
mode.** The form still validates everything, then renders the ticket as a copyable
summary with *Open email app* / *Copy* / *Download* buttons. Nothing is silently
lost, and the site is useful the moment it is deployed. The same fallback appears
if a configured endpoint is unreachable.

Only public values belong in `config.js` — it is served to the browser. Never put
an API secret there.

### Privacy note for operators

These forms collect an email address and a billing screenshot, which may contain
partial card details. The upload panel asks readers to redact anything they do not
want to share. Whichever backend you choose inherits that data, so pick one whose
retention and location suit your jurisdiction, and link a real privacy policy from
the footer before launch.

## Local preview

Any static file server works:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

Force a locale while testing with `?lang=ja` or `?lang=zh-Hant`.

## Deployment

`.github/workflows/deploy.yml` publishes the repository root to GitHub Pages on
every push to `main` (and to the development branch), and can be run manually from
the Actions tab.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Without that, the workflow will fail at the deploy step.

`.nojekyll` is present so Jekyll does not reprocess the files.

## Before going live

- [ ] Replace `appStoreUrl` / `googlePlayUrl` / `supportEmail` in `config.js`
- [ ] Point `formEndpoint` at a backend that accepts attachments
- [ ] Write the privacy policy and terms pages the footer links to
- [ ] Replace the placeholder figures in the hero (`hero.stat*` in `i18n.js`)
- [ ] Have a native speaker review the Japanese and Traditional Chinese copy
