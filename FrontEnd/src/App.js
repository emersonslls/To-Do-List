// src/App.js
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

/* <--- PAGES ---> */
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadatsro/Cadastro";
import LoadingScreen from "./Components/Loading/LoadingScreen";
import EsqueceuSenha from "./Pages/EsqueceuSenha/EsqueceuSenha";
import Perfil from "./Pages/Perfil/Perfil";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Agora está dentro do Router corretamente

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueceuasenha" element={<EsqueceuSenha />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </>
  );
}

export default App;
