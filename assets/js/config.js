/*!
 * PleasureLab — site configuration.
 *
 * Everything an operator needs to change lives here. No build step, no secrets:
 * this file ships to the browser, so it must only ever contain public values.
 */
window.PL_CONFIG = {
  /* Where support email should go when the form falls back to the mail client. */
  supportEmail: 'support@pleasurelab.app',

  /* Store links. Leave as '#' until the listings are live. */
  appStoreUrl: '#',
  googlePlayUrl: '#',

  /**
   * Endpoint that receives support tickets as multipart/form-data.
   *
   * Leave empty to run the site in "email fallback" mode: the form validates
   * everything, then renders a copyable ticket summary and a mailto: link so a
   * static deployment is still useful on day one.
   *
   * Any service that accepts a multipart POST from the browser works —
   * Formspree (https://formspree.io/f/xxxxxxx), Web3Forms
   * (https://api.web3forms.com/submit), or your own worker. See README.md.
   */
  formEndpoint: '',

  /**
   * Public key sent alongside the payload, if your provider needs one.
   * Formspree does not; Web3Forms calls it `access_key`.
   */
  formAccessKey: '',
  formAccessKeyField: 'access_key',

  /* Screenshot upload limits. */
  maxUploadMB: 5,
  acceptedUploadTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']
};
