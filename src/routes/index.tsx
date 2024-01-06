import { createBrowserRouter } from 'react-router-dom';

import { List } from '@/pages/List';
import { User } from '@/pages/User';
import { Repository } from '@/pages/Repository';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <List />,
  },
  {
    path: '/users/:username',
    element: <User />,
  },
  {
    path: '/repositories/:username/:name',
    element: <Repository />,
  },
  {
    path: '*',
    element: <List />,
  },
]);