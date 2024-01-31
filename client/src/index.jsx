/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: main.jsx
 * Date : 1/14/2024 17:03:48 PM
 *******************************************************************/
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './App.jsx'


import About from './pages/about.jsx'
import Map from './pages/map.jsx'
// import LostPets from './pages/lostpets.jsx'
// import Spotted from './pages/spotted.jsx'
// import Post from './pages/post.jsx'
import Contact from './pages/contact.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'

import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
     {
          path: '/',
          element: <App />,
          // errorElement: <Error />,
          children: [
               {
                    index: true,
                    element: <Map />,
               },
               { path: '/About', element: <About />, },
               { path: '/Contact', element: <Contact />, },
               { path: '/Login', element: <Login />, },
               { path: '/Register', element: <Register />, },
          ],
     },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
);