import React from 'react';
import ReactDOM from 'react-dom/client';
import './different-pages/css/index.css';
import Home from './different-pages/App-home';
import reportWebVitals from './reportWebVitals';
import LiveOdds from './different-pages/livegolfodds';
import Sites from './golf betting sites/golfbettingsites';
import Tips from './different-pages/golfbettingtips';
import Week from './different-pages/Betsoftheweek';
import OpenChamp from './different-pages/tournaments/openchamp';
import TheMasters from './different-pages/tournaments/themaster';
import TheOpen from './different-pages/tournaments/theopen';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
 {
  path: "/", 
  element: <Home />,
 },
 {
  path: "/Tips", 
  element: <Tips />,
 },
 {
  path: "/Odds", 
  element: <LiveOdds />,
 },
 {
  path: "/Week", 
  element: <Week />,
 },
 {
  path: "/Sites", 
  element: <Sites />,
 },
])

const router2 = createBrowserRouter([
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
  {
    path2: "",
    element2: "",
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
