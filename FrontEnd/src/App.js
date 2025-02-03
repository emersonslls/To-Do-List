/* <--- FUNCTIONS REACT ---> */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* <--- PAGES ---> */
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadatsro/Cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
