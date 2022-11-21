import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { apiSWRFetcher } from './api';
import LanguageEffect from './components/LanguageEffect';
import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <SWRConfig value={{ fetcher: apiSWRFetcher }}>
      <CssBaseline>
        <RouterProvider router={router} />
      </CssBaseline>
      <LanguageEffect />
    </SWRConfig>
  );
}
