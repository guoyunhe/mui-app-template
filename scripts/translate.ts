import { translate } from 'bing-translate-api';
import glob from 'fast-glob';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

import { languageCodes } from 'config/i18n.js';

const localeRoot = 'public/locales';
const sourceDir = localeRoot + '/en';

(async () => {
  const sourceFiles = await glob('*.json', { cwd: sourceDir });
  for (const sourceFile of sourceFiles) {
    const sourceData = JSON.parse(await readFile(join(sourceDir, sourceFile), 'utf-8'));
    for (const locale of languageCodes) {
      if (locale === 'en') continue;
      const bingLang = locale === 'zh' ? 'zh-Hans' : locale;
      const translationDir = join(localeRoot, locale);
      const translationFile = join(translationDir, sourceFile);
      const translationData = JSON.parse(await readFile(translationFile, 'utf-8'));
      let needSave = false;
      for (const key of Object.keys(sourceData)) {
        if (translationData[key]) continue; // skip existing translations
        const result = await translate(sourceData[key], 'en', bingLang);
        translationData[key] = result.translation;
        console.log(translationFile, sourceData[key], ' -> ', translationData[key]);
        needSave = true;
      }
      if (needSave) {
        writeFile(translationFile, JSON.stringify(translationData, null, 2));
      }
    }
  }
})();
