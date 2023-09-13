import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './services/queryClient.ts'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={ queryClient }>
        <CssBaseline />
        <ToastContainer />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
