import { CssBaseline } from '@mui/material';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';
import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <SWRConfig
      value={{ fetcher: (url) => axios.get(url).then((res) => res.data) }}
    >
      <CssBaseline>
        <RouterProvider router={router} />
      </CssBaseline>
    </SWRConfig>
  );
}
