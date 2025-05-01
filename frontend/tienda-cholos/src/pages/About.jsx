import React from "react";
import "../../styles/About.css";
import zapatos from "../images/ZapatosLimpios.png";
import Footer from "../components/Footer.jsx"

const About = () => {
  return (
    <div className="bg-white">
    <div className="pt-[5rem]">
      <div className="about-full">
        <h2 className="about-title">Sobre nosotros</h2>
        <div className="about-header">
          <div className="about-image">
            <img src={zapatos} alt="Sobre nosotros" />
          </div>
          <div className="about-text">
            <p>
              En Cholo's, somos más que una tienda de calzado: somos una comunidad apasionada
              por el estilo urbano y la cultura streetwear. Fundado con la misión de ofrecer
              zapatillas únicas que combinen calidad, comodidad y actitud, hemos crecido para
              convertirnos en el destino favorito de quienes buscan destacar en cada paso.
            </p>
          </div>
        </div>
      </div>

      <section className="about-box mission">
        <div className="about-content">
        <h3>Nuestra misión</h3>
        <p>
          Cree una tienda en línea en la que los clientes a nivel nacional puedan ver y adquirir
          zapatos de las marcas más reconocidas directamente de las marcas por medio de acuerdos
          con ellas y no de terceros. Pues es nuestra prioridad dar un sitio seguro de compra de
          zapatos auténticos a nuestros clientes.
        </p>
        </div>
      </section>

      <section className="about-box vision">
        <div className="about-content">
        <h3>Nuestra visión</h3>
        <p>
          Ser la tienda en línea líder en cuanto a ventas de zapatos originales en el país,
          reconocida por la confiabilidad, autenticidad y calidad de cada uno de nuestros pares.
          Nos proyectamos como la primera opción de los clientes amantes del mundo de los zapatos
          con nuestro stock siempre disponible y garantizado.
        </p>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default About;
