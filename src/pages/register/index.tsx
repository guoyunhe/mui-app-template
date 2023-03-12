import { RedirectAfterAuth, useRegister } from '@guoyunhe/react-auth';
import { LoadingButton } from '@mui/lab';
import { Alert, Paper, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function getFieldError(errors: any, field: string) {
  return errors?.find((err: any) => err.field === field)?.message;
}

export default function RegisterPage() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { submit, loading, errors } = useRegister({ email, password });

  const nameError = getFieldError(errors, 'name');
  const emailError = getFieldError(errors, 'email');
  const passwordError = getFieldError(errors, 'password');
  const passwordConfirmError = getFieldError(errors, 'passwordConfirm');

  return (
    <Paper sx={{ borderRadius: 5, p: 5 }}>
      <RedirectAfterAuth />
      <Typography variant="h4">{t('Register')}</Typography>
      <Stack spacing={3} mt={3}>
        {typeof errors === 'string' && <Alert severity="error">{errors}</Alert>}
        <TextField
          label={t('Name')}
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          error={!!nameError}
          helperText={nameError}
        />
        <TextField
          label={t('Email')}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          label={t('Password')}
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          error={!!passwordError}
          helperText={passwordError}
        />
        <TextField
          label={t('Confirm password')}
          type="password"
          value={passwordConfirm}
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
          error={!!passwordConfirmError}
          helperText={passwordConfirmError}
        />
        <LoadingButton variant="contained" loading={loading} onClick={submit}>
          {t('Register')}
        </LoadingButton>
      </Stack>
    </Paper>
  );
}
