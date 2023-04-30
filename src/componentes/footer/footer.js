import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="info">
        <img className="logo" src={require("../../assets/logo.png")} />
        <div>
          <h3>ENDEREÇO</h3>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div>
          <h3>CONTATO</h3>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div>
          <h3>HORÁRIOS</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </section>
      <p className="autoral">Gelateria desenvolvida por Gabriel Emidio Alves</p>
    </footer>
  );
};

export default Footer;
