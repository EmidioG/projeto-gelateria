import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <BrowserRouter>
      <header>
        <section className="header">
          <img className="logo" src={require("../../assets/logo.png")} />
          <nav>
            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sabores">Sabores</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </BrowserRouter>
  );
};
export default Header;
