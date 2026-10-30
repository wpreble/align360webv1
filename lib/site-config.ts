export const siteConfig = {
  name: "Align360",
  legalEntity: "Feeling Like Chocolate",

  /**
   * Optional "Starting at ..." line on the enterprise offer card, e.g. "$15K / month".
   * Left null on purpose: the budget conversation happens on the call, and nothing
   * is quoted before we've heard the client's problem. Set it to show a floor price.
   */
  enterpriseStartingPrice: null as string | null,

  /**
   * Where "Log in" goes. The app is served from the same domain as this site, so this
   * is a same-origin path. /insights rather than /login: a visitor who is already signed
   * in lands straight in the app (/login would show them the sign-in form again), and a
   * signed-out visitor is sent by the app's middleware to /login?next=/insights, which is
   * the same form and the same post-login destination /login uses.
   * Keep in sync with the app's copy (align360-app, lib/site-config.ts).
   */
  appHref: "/insights",

  // Confirm these routes exist on the deployed site before merging.
  privacyHref: "/privacy",
  termsHref: "/terms",
}
