export const i18n = {
  defaultLocale: "en",
  locales: ["en", "de", "tr", "fr", "it", "pk"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
