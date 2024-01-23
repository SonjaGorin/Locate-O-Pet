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
import App from './App.jsx'

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
               { path: '/Logout', element: <Logout />, }
          ],
     },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
);