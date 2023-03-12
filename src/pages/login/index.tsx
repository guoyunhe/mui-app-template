import { RedirectAfterAuth, useLogin } from '@guoyunhe/react-auth';
import { LoadingButton } from '@mui/lab';
import { Alert, Paper, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LoginPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { submit, loading, errors } = useLogin({ email, password });

  return (
    <Paper sx={{ borderRadius: 5, p: 5 }}>
      <RedirectAfterAuth />
      <Typography variant="h4">{t('Login')}</Typography>
      <Stack spacing={3} mt={3}>
        {typeof errors === 'string' && <Alert severity="error">{errors}</Alert>}
        <TextField
          label={t('Email')}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label={t('Password')}
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <LoadingButton variant="contained" loading={loading} onClick={submit}>
          {t('Login')}
        </LoadingButton>
      </Stack>
    </Paper>
  );
}
