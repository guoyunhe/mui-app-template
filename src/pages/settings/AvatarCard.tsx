import { useAuth } from '@guoyunhe/react-auth';
import { Delete as DeleteIcon, Upload as UploadIcon } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Avatar, Card, CardContent, CardHeader, Stack } from '@mui/material';
import xior from 'xior';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import RequestStatus from '~/types/enums/RequestStatus';
import Image from '~/types/models/Image';
import User from '~/types/models/User';

const avatarSize = 128;

export default function AvatarUploader() {
  const { user, setUser } = useAuth<User>();
  const { t } = useTranslation();
  const [uploadStatus, setUploadStatus] = useState(RequestStatus.Idle);
  const [deleteStatus, setDeleteStatus] = useState(RequestStatus.Idle);
  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardHeader title={t('Avatar')} />
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={user?.avatar?.url} sx={{ width: avatarSize, height: avatarSize, mr: 2 }} />
        <Stack spacing={2}>
          <LoadingButton
            variant="outlined"
            component="label"
            startIcon={<UploadIcon />}
            loading={uploadStatus === RequestStatus.Progressing}
            loadingPosition="start"
          >
            {t('Upload')}
            <input
              type="file"
              accept="*.jpg,*.png,*.gif,*.webp"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const data = new FormData();
                  data.append('file', file);
                  data.append('width', '512');
                  data.append('height', '512');
                  data.append('fit', 'cover');
                  setUploadStatus(RequestStatus.Progressing);
                  xior
                    .post<Image>('/images', data)
                    .then((res) => {
                      const image = res.data;
                      return xior.put<User>('/user', { avatarId: image.id });
                    })
                    .then((res) => {
                      setUser(res.data);
                      setUploadStatus(RequestStatus.Succeeded);
                    })
                    .catch(() => {
                      setUploadStatus(RequestStatus.Failed);
                    });
                }
              }}
            />
          </LoadingButton>
          <LoadingButton
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            loading={deleteStatus === RequestStatus.Progressing}
            loadingPosition="start"
            onClick={() => {
              setDeleteStatus(RequestStatus.Progressing);
              xior
                .put<User>('/user', { avatarId: null })
                .then((res) => {
                  setUser(res.data);
                  setDeleteStatus(RequestStatus.Succeeded);
                })
                .catch(() => {
                  setDeleteStatus(RequestStatus.Failed);
                });
            }}
          >
            {t('Remove')}
          </LoadingButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
