import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/root/Root';
import Home from './component/home/Home';
import Appliedjob from './component/appliedjob/Appliedjob';
import Error from './component/errorPage/Error';
import JobDetails from './component/jobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element: <Home></Home>

      },
      {
        path:'/applied',
        element: <Appliedjob></Appliedjob>,
        loader:()=>fetch('/public/jobs.json'),//Waring: only load the you need , do not load all the data ,
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('/public/jobs.json'),
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
