import React from "react";
import "../../styles/Home.css";

const Home = () => {
  return (
    <div className="main-header">
      <div className="header-content">
        <h1>Cholo's</h1>
        <p className="tagline">El estilo que pisa fuerte</p>
        <p className="subtagline">Compra en nuestra tienda</p>
        <button className="cta-button">Compra en nuestra tienda</button>
      </div>
    </div>
  );
};

export default Home;