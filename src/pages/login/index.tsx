import { useLogin } from '@guoyunhe/react-auth';
import { LoadingButton } from '@mui/lab';
import { Alert, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LoginPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { submit, loading, errors } = useLogin({ email, password });

  return (
    <Stack spacing={3} p={3}>
      {errors?.message && <Alert severity="error">{errors?.message}</Alert>}
      <TextField
        label={t('Email')}
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        label={t('Password')}
        type="password"
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <LoadingButton variant="contained" loading={loading} onClick={submit}>
        {t('Login')}
      </LoadingButton>
    </Stack>
  );
}
