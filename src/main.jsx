import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src_v2/App'
// o: import App from './src_v2/App'   (según la ubicación de main.jsx en tu proyecto)
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
