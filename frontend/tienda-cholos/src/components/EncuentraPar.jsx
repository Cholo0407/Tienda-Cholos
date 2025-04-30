import React from "react";
import "../../styles/EncuentraPar.css";
import nike from "../images/nike.png";
import adidas from "../images/adidas.png";
import puma from "../images/puma.png";
import newbalance from "../images/newbalance.png";
import converse from "../images/converse.png";


const EncuentraPar = () => {
  return (
    <section className="encuentra-par">
      <div className="contenido">
        <div className="texto">
          <span className="subtitulo">Tu estilo, Tu manera</span>
          <h2>Encuentra tu par perfecto</h2>
        </div>
        <div className="acciones">
          <p>En Cholo's creemos en zapatos que reflejen tu personalidad y estilo de vida.</p>
          <div className="botones">
            <button className="catalogo">Ver catálogo</button>
            <button className="info">Más información</button>
          </div>
        </div>
      </div>
      <br />
      <div className="logos">
       <img src={nike} alt="Nike" />
       <img src={adidas} alt="Adidas" />
       <img src={puma} alt="Puma" />
       <img src={newbalance} alt="New Balance" />
       <img src={converse} alt="Converse" />
      </div>
      <br />
    </section>
  );
};

export default EncuentraPar;
