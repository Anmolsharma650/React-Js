import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/Aboutus/About.jsx'
import Contact from './components/Contactus/Contact.jsx'
import './index.css'
import Github, { fetchData } from './components/Github/GIthub.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { loader: fetchData , path: 'github', element: <Github /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
