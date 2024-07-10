import React from 'react'
import ReactDOM from 'react-dom/client'
//@ts-ignore
import App from './App.tsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
      <App />
  </HashRouter>
  ,
)
