import { ChakraProvider } from '@chakra-ui/react';
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
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </SWRConfig>
  );
}
