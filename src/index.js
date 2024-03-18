import React from 'react';
import ReactDOM from 'react-dom/client';
import './different-pages/css/index.css';
import Home from './different-pages/App-home';
import reportWebVitals from './reportWebVitals';
import LiveOdds from './different-pages/livegolfodds';
import Sites from './different-pages/golfbettingsites';
import Tips from './different-pages/golfbettingtips';
import Week from './different-pages/Betsoftheweek';
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
