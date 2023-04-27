import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Home from './pages/Home';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/discovery',
//     element: <Home />
//   },{
//     path: '/work',
//     element: <Home />
//   },{
//     path: '/game',
//     element: <Home />
//   },{
//     path: '/development',
//     element: <Home />
//   },{
//     path: '/categories',
//     element: <Home />
//   },
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
