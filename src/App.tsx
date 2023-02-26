import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';
import LanguageEffect from './components/LanguageEffect';
import routes from './routes';

const router = createBrowserRouter(routes);

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <RouterProvider router={router} />
      <LanguageEffect />
    </SWRConfig>
  );
}
