import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Upload } from './routes/Upload'
import { FileDetails } from './routes/FileDetails'

const router = createBrowserRouter([
  {path : '/', element : <App />},
  {path : '/upload', element : <Upload />},
  {path : '/file-details', element : <FileDetails />},


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
