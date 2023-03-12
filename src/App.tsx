import { AuthProvider } from '@guoyunhe/react-auth';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LanguageEffect from './components/LanguageEffect';
import routes from './routes';
import theme from './theme';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <RouterProvider router={router} />
        <LanguageEffect />
      </AuthProvider>
    </ThemeProvider>
  );
}
