import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Paper sx={{ borderRadius: 5, p: 5 }}>
      <Typography variant="h4">{t('Login')}</Typography>
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
        <Button variant="contained" size="large" onClick={() => {}}>
          {t('Login')}
        </Button>
      </Stack>
    </Paper>
  );
}
