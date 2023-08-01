import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { ErrorPage } from './views/ErrorPage';
import { MainView } from './views/MainView';
import { Conocenos } from './views/Conocenos';
import { Ubicanos } from './views/Ubicanos';


// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
import Popper from 'popper.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
    errorElement: <ErrorPage />,
    
  },
  {
    path: "/conocenos",
    element: <Conocenos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ubicanos",
    element: <Ubicanos />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{margin: "50px", padding: "20px"}}>
      <NavBar />
    </div>
    
    {/* <App /> */}
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
