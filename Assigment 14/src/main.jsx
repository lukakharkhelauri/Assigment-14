import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import MainBox from './components/MainBox'
import './modules/index.module.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />

    <MainBox />
  </React.StrictMode>,
)
