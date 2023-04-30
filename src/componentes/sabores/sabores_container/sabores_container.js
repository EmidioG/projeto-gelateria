import React from "react";
const SaboresContainer = (props) => {
  return (
    <section className="Sabores-item">
      <img src={props.img} />

      <h3>{props.nomeSabor}</h3>
      <p>{props.SaborDescrição}</p>
    </section>
  );
};
export default SaboresContainer;
