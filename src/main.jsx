import React from "react";
import App from "./App.jsx";
import Front from './pages/Front';
import Login from './componet/Login';
import Blogs from './pages/Blogs';
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import "./index.css";

const router = createBrowserRouter([{
  element:<App/>,
  children:[
    { path:'/',
     element:<Login/>
    },
    { path:'/front',
    element:<Front />,
    },
    { path: '/blogs',
     element:<Blogs />,
    },
    ]
  }
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
