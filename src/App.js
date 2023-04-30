import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./componentes/header/header.js";
import Footer from "./componentes/footer/footer.js";
import Rotas from "./routes/routes.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
