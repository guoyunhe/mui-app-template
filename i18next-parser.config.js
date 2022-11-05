// https://github.com/i18next/i18next-parser
import fs from 'fs';

const locales = JSON.parse(fs.readFileSync('./src/locales.json'));

export default {
  locales: locales.map((item) => item.code),
  input: ['src/**/*.{js,jsx,ts,tsx}'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  indentation: 2,
  keySeparator: false,
  namespaceSeparator: false,
};
