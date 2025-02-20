import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx';
import Users from './pages/Users.jsx';
import Products from './pages/Products.jsx';
import Employes from './pages/Employes.jsx';
import Reviews from './pages/Reviews.jsx';
import Home from './pages/Home.jsx';
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "/users",
        element: <Users />,
      },

      {
        path: "/products",
        element: <Products />,
      },

      {
        path: "/employes",
        element: <Employes />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
