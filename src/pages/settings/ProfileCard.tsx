import { Box, Card, CardContent, CardHeader } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AvatarUploader from './AvatarUploader';
import ProfileForm from './ProfileForm';

export default function ProfileCard() {
  const { t } = useTranslation();
  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardHeader title={t('Profile')} />
      <CardContent>
        <Box sx={{ display: { sm: 'flex' } }}>
          <AvatarUploader />
          <ProfileForm />
        </Box>
      </CardContent>
    </Card>
  );
}
