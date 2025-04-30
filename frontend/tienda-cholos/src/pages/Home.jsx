import React from "react";
import "../../styles/Home.css";
import Imagenes from "../components/Imagenes";
import PorqueElegirnos from "../components/PorqueElegirnos";
import EncuentraPar from "../components/EncuentraPar";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="main-home">
      <div className="main-header">
        <div className="header-content">
          <h1>Cholo's</h1>
          <p className="tagline">El estilo que pisa fuerte</p>
          <p className="subtagline">Compra en nuestra tienda</p>
          <button className="cta-button">Compra en nuestra tienda</button>
        </div>
        <div className="imagenes-separado">
          <Imagenes />
        </div>
      </div>

      <PorqueElegirnos /> 
       

      <EncuentraPar />

      
      <Footer />

      
    </div>
  );
};

export default Home;