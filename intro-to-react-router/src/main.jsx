import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import Mobiles from './components/mobiles/Mobiles.jsx';
import Laptops from './components/laptops/Laptops.jsx';
import Users from './components/users/Users.jsx';
import Users2 from './components/users2/Users2.jsx';
import UserDetails from './components/userDetails/UserDetails.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const router = createBrowserRouter([
  {
    path:'/',
    Component : Root,
    children : [
      {index : true, Component : Home},
      {path : 'mobiles', Component : Mobiles},
      {path : 'laptops', Component : Laptops},
      {
        path : 'users', 
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component : Users
      },
      {
        path : 'users2',
        element : <Suspense fallback={<span>Loading....</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`), 
        Component: UserDetails,
      }
    ]
  },
  {
    path : 'about',
    element : <div>About Section</div>
  },
  {
    path : 'app',
    Component : App
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
