import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './investment-calc/index.css'
import App from './investment-calc/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
