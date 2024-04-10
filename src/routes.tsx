import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './pages/_layouts/app'
import Home from './pages/app/home'
import NewProduct from './pages/app/newProduct'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/admin/new-product', element: <NewProduct /> },
    ],
  },
])
