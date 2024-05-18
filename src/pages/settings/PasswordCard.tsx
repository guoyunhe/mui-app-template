import { Save as SaveIcon } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Card, CardContent, CardHeader, TextField } from '@mui/material';
import xior from 'xior';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import RequestStatus from '~/types/enums/RequestStatus';
import getFieldError from '~/utils/getFieldError';

export default function PasswordCard() {
  const { t } = useTranslation();

  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [status, setStatus] = useState(RequestStatus.Idle);
  const [errors, setErrors] = useState<any>(null);
  const oldPasswordError = getFieldError(errors, 'oldPassword');
  const passwordError = getFieldError(errors, 'password');
  const passwordConfirmError = getFieldError(errors, 'passwordConfirm');

  const submit = () => {
    setStatus(RequestStatus.Progressing);
    xior
      .put('/password', { oldPassword, password, passwordConfirm })
      .then(() => {
        setStatus(RequestStatus.Succeeded);
      })
      .catch((err) => {
        setStatus(RequestStatus.Failed);
        setErrors(err?.response?.data);
      });
  };

  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardHeader title={t('Password')} />
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {status === RequestStatus.Succeeded && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {t('Password updated successfully')}
            </Alert>
          )}
          {status === RequestStatus.Failed && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errors?.message || t('Failed to update password')}
            </Alert>
          )}
          <TextField
            label={t('Old password')}
            type="password"
            name="password"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
            error={!!oldPasswordError}
            helperText={oldPasswordError}
            sx={{ mb: 2 }}
          />
          <TextField
            label={t('New password')}
            type="password"
            name="newPassword"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={!!passwordError}
            helperText={passwordError}
            sx={{ mb: 2 }}
          />
          <TextField
            label={t('Confirm password')}
            type="password"
            name="newPasswordConfirm"
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
            error={!!passwordConfirmError}
            helperText={passwordConfirmError}
            sx={{ mb: 2 }}
          />
          <LoadingButton
            variant="outlined"
            loading={status === RequestStatus.Progressing}
            onClick={submit}
            startIcon={<SaveIcon />}
          >
            {t('Save')}
          </LoadingButton>
        </Box>
      </CardContent>
    </Card>
  );
}
