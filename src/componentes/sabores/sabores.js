import React from "react";
import SaboresContainer from "./sabores_container/sabores_container.js";
import "./sabores.css";

const Sabores = () => {
  return (
    <main>
      <section className="apresentacao-sabores">
        <h1>NOSSOS SABORES</h1>
      </section>
      <article className="Sabores">
        <h2 className="SaboresTitulo">SABORES DE SORVETE</h2>
        <SaboresContainer
          img={require("../../assets/sabor-oreo.png")}
          nomeSabor="Sorvete de Oreo"
          SaborDescrição="Delicioso sorvete sabor Oreo. Uma explosão de sabor."
        />
        <SaboresContainer
          img={require("../../assets/sabor-pistache.png")}
          nomeSabor="Sorvete Pistache"
          SaborDescrição="Cremoso sorvete sabor pistache com pedacinhos de semente."
        />
        <SaboresContainer
          img={require("../../assets/sabor-cookies-avela.png")}
          nomeSabor="Sorvete Cookies & Avelã"
          SaborDescrição="O nosso melhor sorvete. Você vai adorar o sabor."
        />
        <SaboresContainer
          img={require("../../assets/sorbet-kiwi.png")}
          nomeSabor="Sorvete de Kiwi"
          SaborDescrição="Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C."
        />
        <SaboresContainer
          img={require("../../assets/sorbet-morango.png")}
          nomeSabor="Sorvete de Morango"
          SaborDescrição="Sorvete de morango gourmet. Tradicional e saboroso."
        />
        <SaboresContainer
          img={require("../../assets/sorbet-limao.png")}
          nomeSabor="Sorvete de Limão Siciliano"
          SaborDescrição="O incrivel sorvete gourmet de limão siciliano vai te encantar."
        />
      </article>
    </main>
  );
};

export default Sabores;
