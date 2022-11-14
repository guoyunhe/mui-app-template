import { MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { languages } from '../config/i18n';

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  return (
    <Select
      size="small"
      value={i18n.language}
      onChange={(e) => {
        i18n.changeLanguage(e.target.value);
      }}
    >
      {languages.map((item) => (
        <MenuItem key={item.code} value={item.code}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
}
