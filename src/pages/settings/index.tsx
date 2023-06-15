import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AvatarUploader from './AvatarCard';
import LanguageCard from './LanguageCard';
import PasswordCard from './PasswordCard';
import ProfileCard from './ProfileCard';

export default function SettingsPage() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="sm" sx={{ pt: 3 }}>
      <Typography variant="h1" sx={{ mb: 3 }}>
        {t('Settings')}
      </Typography>
      <AvatarUploader />
      <ProfileCard />
      <PasswordCard />
      <LanguageCard />
    </Container>
  );
}
