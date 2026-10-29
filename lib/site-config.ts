export const siteConfig = {
  name: "Align360",
  legalEntity: "Feeling Like Chocolate",

  /**
   * Optional "Starting at ..." line on the enterprise offer card, e.g. "$15K / month".
   * Left null on purpose: the budget conversation happens on the call, and nothing
   * is quoted before we've heard the client's problem. Set it to show a floor price.
   */
  enterpriseStartingPrice: null as string | null,

  // Confirm these routes exist on the deployed site before merging.
  privacyHref: "/privacy",
  termsHref: "/terms",
}
