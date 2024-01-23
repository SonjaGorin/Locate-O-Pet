/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: main.jsx
 * Date : 1/14/2024 17:03:48 PM
 *******************************************************************/
import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './App.jsx'

import About from './pages/about.jsx'
import Map from './pages/map.jsx'
import LostPets from './pages/lostpets.jsx'
import Spotted from './pages/spotted.jsx'
import Post from './pages/post.jsx'
import Contact from './pages/contact.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
     {
          path: '/',
          element: <App />,
          errorElement: <Error />,
          children: [
               {
                    index: true,
                    element: <Map />,
               },
               { path: '/About', element: <About />, },
               { path: '/LostPets', element: <LostPets />, },
               { path: '/Spotted', element: <Spotted />, },
               { path: '/Post', element: <Post />, },
               { path: '/Contact', element: <Contact />, },
               // { path: '/Logout', element: <Logout />, }
          ],
     },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <div>
     <RouterProvider router={router} />
     <React.StrictMode>
        <Map />
    </React.StrictMode>
    </div>
);

// ReactDOM.createRoot(document.getElementById('map-root')).render(
//      <React.StrictMode>
//          <App />
//      </React.StrictMode>
//  )