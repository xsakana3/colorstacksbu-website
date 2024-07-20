import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter.jsx'
import './index.css'
import { Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AppRouter />
    </Router>
  </React.StrictMode>,
)
