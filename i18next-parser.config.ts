// https://github.com/i18next/i18next-parser
import { languages } from './src/config/i18n';

export default {
  locales: languages.map((item) => item.code),
  input: ['src/**/*.{js,jsx,ts,tsx}'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  indentation: 2,
  keySeparator: false,
  namespaceSeparator: false,
};
