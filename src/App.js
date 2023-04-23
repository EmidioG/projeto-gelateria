import React from "react";
import Header from "./componentes/header/header.js";
import Footer from "./componentes/footer/footer.js";
import Rotas from "./routes/routes.js";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Rotas />
      <Footer />
    </div>
  );
}

export default App;
