import { CircularProgress } from '@mui/material';
import { AppProvider } from 'material-app';
import { Suspense } from 'react';
import { FetchConfigProvider, IndexedDBStore } from 'react-fast-fetch';
import { RouterProvider } from 'react-router-dom';
import xior from 'xior';
import { languages } from './config/i18n';
import router from './router';
import { darkTheme, lightTheme } from './themes';

const store = new IndexedDBStore({ limit: 10000 });
const fetcher = (url: string) => xior.get(url).then((res) => res.data);

export default function App() {
  return (
    <FetchConfigProvider store={store} fetcher={fetcher}>
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
        <AppProvider
          lightTheme={lightTheme}
          darkTheme={darkTheme}
          languages={languages}
          loginPath="/login"
          loginRedirectPath="/app"
          logoutRedirectPath="/"
        >
          <RouterProvider router={router} />
        </AppProvider>
      </Suspense>
    </FetchConfigProvider>
  );
}
