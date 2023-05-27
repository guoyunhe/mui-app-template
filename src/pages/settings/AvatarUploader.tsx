import { useAuth } from '@guoyunhe/react-auth';
import { Upload as UploadIcon } from '@mui/icons-material';
import { Avatar, Box, Button } from '@mui/material';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import User from 'src/types/models/User';

const avatarSize = 140;

export default function AvatarUploader() {
  const { user, setUser } = useAuth<User>();
  const { t } = useTranslation();
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Avatar src={user?.avatar?.url} sx={{ width: avatarSize, height: avatarSize, mb: 2 }} />
      <Button variant="outlined" component="label" startIcon={<UploadIcon />}>
        {t('Upload')}
        <input
          type="file"
          accept="*.jpg,*.png,*.gif,*.webp"
          hidden
          onChange={(e) => {
            const avatar = e.target.files?.[0];
            if (avatar) {
              const data = new FormData();
              data.append('avatar', avatar);
              axios.patch('/user', data).then((res) => {
                setUser(res.data);
              });
            }
          }}
        />
      </Button>
    </Box>
  );
}
