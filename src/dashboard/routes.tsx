import { RouteObject } from 'react-router-dom';
import NotFound from '../not-found';
import Home from './home';
import Users from './users';

const routes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'users',
    element: <Users />,
  },
  {
    element: <NotFound />,
  },
];

export default routes;
