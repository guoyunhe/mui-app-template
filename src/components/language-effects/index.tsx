import { useAuth } from '@guoyunhe/react-auth';
import axios from 'axios';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import User from 'src/types/models/User';

export default function LanguageEffects() {
  const { i18n } = useTranslation();
  const { user } = useAuth<User>();

  // sync user.lcoale -> i18next
  useEffect(() => {
    if (user?.locale) {
      i18n.changeLanguage(user.locale);
    }
  }, [user?.locale]);

  // sync i18next -> html lang attribute
  useEffect(() => {
    axios.defaults.headers['Accept-Language'] = i18n.language;
    document.documentElement.setAttribute('lang', i18n.language.toLowerCase());
  }, [i18n.language]);

  return null;
}
