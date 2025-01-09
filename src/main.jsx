import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Upload } from './routes/Upload'

const router = createBrowserRouter([
  {path : '/', element : <App />},
  {path : '/upload', element : <Upload />},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
