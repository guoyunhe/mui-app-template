import { AuthProvider } from '@guoyunhe/react-auth';
import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import Router from './Router';
import LanguageEffects from './components/language-effects';
import theme from './theme';

export default function App() {
  return (
    <Suspense
      fallback={
        <CircularProgress
          size={48}
          sx={{
            display: 'block',
            position: 'fixed',
            left: '50%',
            top: '50%',
            m: -3,
          }}
        />
      }
    >
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <LanguageEffects />
          <Router />
        </AuthProvider>
      </ThemeProvider>
    </Suspense>
  );
}
