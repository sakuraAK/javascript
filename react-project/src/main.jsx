import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ex5/index.css'
import App from './ex5/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
