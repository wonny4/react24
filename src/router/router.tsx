//App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Headers from '../components/Headers';

import Home from '@Page/Home';
import Css from '@Page/css/Css';
import Hooks from '@Page/hooks/Hooks';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'hooks', element: <Hooks /> },
  { path: 'css', element: <Css /> },
]);
const Router = () => {
  return (
    <div>
      <Headers />
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
