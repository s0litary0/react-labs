import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardList from './CardList/CardList.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList />
  </StrictMode>,
)
