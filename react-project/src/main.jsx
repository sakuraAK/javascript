import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ex4/index.css'
import App from './ex4/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
