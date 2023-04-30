import React from "react";

const HomeItem = (props) => {
  return (
    <section>
      <img src={props.imagem} />
      <div>
        <h2>{props.titulo}</h2>
        <h3>{props.subtitulo}</h3>
        <p>{props.texto}</p>
      </div>
    </section>
  );
};

export default HomeItem;
