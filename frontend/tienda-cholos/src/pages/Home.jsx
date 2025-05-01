import React from "react";
import "../../styles/Home.css";
import Imagenes from "../components/Imagenes";
import PorqueElegirnos from "../components/PorqueElegirnos";
import EncuentraPar from "../components/EncuentraPar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="main-home">

       {/* Encabezado principal con título, eslogan y botón */}
    <div className="main-header">
      <div className="header-content">
        <h1>Cholo's</h1>
        <p className="tagline">El estilo que pisa fuerte</p>
        <button className="cta-button">Compra en nuestra tienda</button>
      </div>

      {/* Galería de imágenes al lado derecho */}
      <div className="imagenes-separado">
        <Imagenes />
      </div>
    </div>

    {/* Sección informativa: razones para elegir la tienda */}
    <PorqueElegirnos />

    {/* Sección promocional con botones y logotipos de marcas */}
    <EncuentraPar />

    {/* Pie de página con información legal y redes sociales */}
    <Footer />
  </div>
  );
};

export default Home;
