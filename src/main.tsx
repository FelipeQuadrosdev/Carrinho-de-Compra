import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ProviderContext } from "./context"
import { router } from './App'
import "./index.css"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderContext>
    <RouterProvider router={router} />
    </ProviderContext>
  </StrictMode>,
)
