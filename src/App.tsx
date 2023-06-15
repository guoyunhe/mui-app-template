import { AuthProvider } from '@guoyunhe/react-auth';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LanguageEffects from './components/language-effects';
import routes from './routes';
import theme from './theme';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <LanguageEffects />
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}
