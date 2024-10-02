import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root/Root'
import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddStudents from './pages/AddStudents/AddStudents'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/add-students',
        element: <AddStudents />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  </StrictMode>,
)
