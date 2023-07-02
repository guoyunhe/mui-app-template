import { AuthProvider } from '@guoyunhe/react-auth';
import { CircularProgress, CssBaseline } from '@mui/material';
import { DualThemeProvider } from 'mui-palette-mode';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import LanguageEffects from './components/language-effects';
import router from './router';
import { darkTheme, lightTheme } from './themes';

export default function App() {
  const { t } = useTranslation();
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
      <DualThemeProvider
        lightTheme={lightTheme}
        darkTheme={darkTheme}
        defaultPaletteMode="auto"
        messages={{
          auto: t('Auto'),
          dark: t('Dark'),
          light: t('Light'),
        }}
      >
        <AuthProvider>
          <CssBaseline />
          <LanguageEffects />
          <RouterProvider router={router} />
        </AuthProvider>
      </DualThemeProvider>
    </Suspense>
  );
}
