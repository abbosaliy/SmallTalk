import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import ChatMenue from './talkMenue/talkMenue';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ChatMenue />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
