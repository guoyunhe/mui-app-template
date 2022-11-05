import { RouteObject } from 'react-router-dom';
import Dashboard from '.';
import Home from './home';
import Users from './users';

const routes: RouteObject[] = [
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
];

export default routes;
