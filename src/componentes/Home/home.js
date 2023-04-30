import React from "react";
import HomeItem from "./HomeItem/homeItem";
import "./home.css";
const Home = () => {
  return (
    <main>
      <section className="apresentacao">
        <h1>SORVETE ARTESANAL</h1>
      </section>
      <article className="home-grid">
        <HomeItem
          imagem={require("../../assets/banner-sabores.jpg")}
          titulo="NOSSOS SABORES"
          subtitulo="Novos e deliciosos!"
          texto="Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!"
        />
        <HomeItem
          imagem={require("../../assets/eventos-image.jpg")}
          titulo="NOSSOS EVENTOS"
          subtitulo="Delicias com sorvete!"
          texto="Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente."
        />
        <HomeItem
          imagem={require("../../assets/sobre-image.jpg")}
          titulo="SOBRE NÓS"
          subtitulo="Alegria em cada casquinha!"
          texto="Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade."
        />
      </article>
    </main>
  );
};

export default Home;
