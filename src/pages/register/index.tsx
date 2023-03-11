import { useLogin } from '@guoyunhe/react-auth';
import { LoadingButton } from '@mui/lab';
import { Paper, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function RegisterPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin({ email, password });

  return (
    <Paper sx={{ borderRadius: 5, p: 5 }}>
      <Typography variant="h4">{t('Register')}</Typography>
      <Stack spacing={3} mt={3}>
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
        <LoadingButton
          variant="contained"
          size="large"
          loading={login.loading}
          onClick={login.submit}
        >
          {t('Register')}
        </LoadingButton>
      </Stack>
    </Paper>
  );
}
