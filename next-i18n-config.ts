export const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'en';
export const locales = [
  'en',
  'fr',
];

/**
 * i18n configuration for next and next-i18next.
 */
const i18n = {
  defaultLocale,
  locales,
};

export default i18n;
