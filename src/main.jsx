import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page.jsx'
import { Compras } from './routes/Compras.jsx'
import { Home } from './routes/Home.jsx'
import { Producto } from './routes/Producto.jsx'
import { Login } from './routes/Login.jsx'
import { Register } from './routes/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/compras',
        element: <Compras />
      },
      {
        path: '/:producto',
        element: <Producto />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
