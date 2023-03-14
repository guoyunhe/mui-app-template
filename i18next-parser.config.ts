// https://github.com/i18next/i18next-parser
import { languageCodes } from './config/i18n';

export default {
  locales: languageCodes,
  input: ['src/**/*.{js,jsx,ts,tsx}'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  indentation: 2,
  keySeparator: false,
  namespaceSeparator: false,
  defaultValue: (locale: string, namespace: string, key: string) => {
    return locale === 'en' ? key : '';
  },
};
