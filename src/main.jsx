import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root/Root'
import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddStudents from './pages/AddStudents/AddStudents'
import ManageStudents from './pages/ManageStudents/ManageStudents'
import AuthProvider from './AuthProvider/AuthProvider'

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
      },
      {
        path: '/manage-students',
        element: <ManageStudents />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
