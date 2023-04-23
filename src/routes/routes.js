import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../componentes/Home/home.js";
import Sabores from "../componentes/sabores/sabores.js";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sabores" element={<Sabores />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
