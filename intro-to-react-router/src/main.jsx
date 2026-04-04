import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import Mobiles from './components/mobiles/Mobiles.jsx';
import Laptops from './components/laptops/Laptops.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    Component : Root,
    children : [
      {index : true, Component : Home},
      {path : 'mobiles', Component : Mobiles},
      {path : 'laptops', Component : Laptops}
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
