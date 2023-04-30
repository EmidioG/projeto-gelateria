import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../componentes/Home/home.js";
import Sabores from "../componentes/sabores/sabores.js";
import Sobre from "../componentes/sobre/sobre.js";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sabores/" element={<Sabores />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
};

export default Rotas;
