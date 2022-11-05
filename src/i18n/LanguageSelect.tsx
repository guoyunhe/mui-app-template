import { Select } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import locales from '../locales.json';

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  return (
    <Select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      {locales.map((item) => (
        <option key={item.code} value={item.code}>
          {item.name}
        </option>
      ))}
    </Select>
  );
}
