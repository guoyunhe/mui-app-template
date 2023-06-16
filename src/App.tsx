import { AuthProvider } from '@guoyunhe/react-auth';
import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LanguageEffects from './components/language-effects';
import routes from './routes';
import theme from './theme';

const router = createBrowserRouter(routes);

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
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </Suspense>
  );
}
