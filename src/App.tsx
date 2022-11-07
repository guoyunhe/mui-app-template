import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';
import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <SWRConfig value={{}}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </SWRConfig>
  );
}
