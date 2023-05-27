import { Box, Card, CardContent, CardHeader, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AvatarUploader from './AvatarUploader';
import ProfileForm from './ProfileForm';

export default function SettingsPage() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="sm" sx={{ pt: 3 }}>
      <Card variant="outlined">
        <CardHeader title={t('Profile')} />
        <CardContent>
          <Box sx={{ display: 'flex' }}>
            <AvatarUploader />
            <ProfileForm />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
