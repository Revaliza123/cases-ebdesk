import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/nav.jsx'
import About from './pages/about.jsx'
import Notfound from './pages/404.jsx'
import Dashboard from './pages/dashboard.jsx'
import Data from './pages/dsource.jsx'
import Sigin from './pages/sigin.jsx'
import NavAby from './components/NavbarAby.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
