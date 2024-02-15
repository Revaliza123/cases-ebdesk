import React from "react";
import { createBrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Sigin from "./pages/sigin.jsx";
import About from "./pages/about.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Dsource from "./pages/dsource.jsx";
import Notfound from "./pages/404.jsx";

const App = () => {
  const router = createBrowserRouter({
    routes: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Sigin /> },
      { path: "/about", element: <About /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dsource", element: <Dsource /> },
      { path: "*", element: <Notfound /> },
    ],
  });

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes router={router} />
    </React.Suspense>
  );
};

export default App;

