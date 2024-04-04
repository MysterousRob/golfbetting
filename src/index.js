import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Home from './pages/Home.jsx';
import reportWebVitals from './reportWebVitals';
import LiveOdds from './pages/livegolfodds.js';
import Sites from './pages/golfbettingsites.js';
import Tips from './pages/golfbettingtips.js';
import Week from './pages/Betsoftheweek.js';
import OpenChamp from './pages/tournaments/openchamp.js';
import TheMasters from './pages/tournaments/themaster.js';
import TheOpen from './pages/tournaments/theopen.js';
import UsPga from './pages/tournaments/uspga.js';
import News from './pages/News.js';
import LiveScores from './components/LiveScores.js';
import AboutUs from './pages/AboutUs.js';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ImageOff } from 'lucide-react';

//header router
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
 //footer router
  {
    path: "/Masters", 
    element: <TheMasters />,
  },
  {
    path: "/Open", 
    element: < TheOpen/>,
  },
  {
    path: "/OpenChamp", 
    element: <OpenChamp />,
  },
  {
    path: "/PGA", 
    element: <UsPga />,
  },
  {
    path: "/News", 
    element: <News />,
  },
  {
    path: "/Scores", 
    element: <LiveScores />,
  },
  {
    path: "/About", 
    element: <AboutUs />,
  },
  {
    path: "", 
    element: "",
  },
  {
    path: "", 
    element: "",
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
