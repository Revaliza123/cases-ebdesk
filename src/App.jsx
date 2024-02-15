import React from "react";
import orang from './assets/gambar1.png';
import logo from './assets/Vector.png';
import Sigin from './pages/sigin.jsx';
import Home from './pages/Home.jsx';
import About from './pages/about.jsx';
import Dashboard from './pages/dashboard.jsx';
import Dsource from './pages/dsource.jsx';
import Masuk from './components/masuk.jsx';
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Notfound from "./pages/404.jsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/login" element={ <Sigin/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/dashboard" element={ <Dashboard/>}/>
        <Route path="/dsource" element={ <Dsource/>}/>
        <Route path="*" element={ <Notfound/>}/>
      </Routes>
    </Router>
  )
}

export default App



export default App;

