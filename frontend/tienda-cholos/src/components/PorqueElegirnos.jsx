import React from "react";
import "../../styles/PorqueElegirnos.css";
import { FaRegCommentDots } from "react-icons/fa6"; 

const PorqueElegirnos = () => {
    const razones = [
      {
        titulo: "Diseños exclusivos",
        descripcion: "Explora estilos únicos que se destacan y marcan tendencia.",
      },
      {
        titulo: "Marcas reconocidas",
        descripcion: "Compra tenis de muchas marcas reconocidas por todo el mundo.",
      },
      {
        titulo: "Precio justo",
        descripcion: "Ofrecemos precios justos sin sobrecostos ni comprometemos calidad.",
      },
      {
        titulo: "Stock directo",
        descripcion: "Acceso a lanzamientos recientes sin intermediarios.",
      },
      {
        titulo: "Autenticidad",
        descripcion: "Todos los productos son 100% originales de marcas oficiales.",
      },
      {
        titulo: "Sitio seguro de compra",
        descripcion: "Diseñado para ofrecer una experiencia amigable y confiable.",
      },
    ];
  
    return (
      <section className="porque-elegirnos">
        <h2>¿Por qué elegirnos?</h2>
        <p className="descripcion">Tenis de calidad para cada paso de tu viaje.</p>
        <div className="razones-grid">
          {razones.map((item, idx) => (
            <div className="razon-horizontal" key={idx}>
              <div className="icono-container">
                <FaRegCommentDots className="icono" />
              </div>
              <div className="texto">
                <h3>{item.titulo}</h3>
                <p>{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
        <br /><br />
      </section>
    );
  };
  
  export default PorqueElegirnos;