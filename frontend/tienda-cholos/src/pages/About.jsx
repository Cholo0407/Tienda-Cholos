import React from "react";
import "../../styles/About.css";
import zapatos from "../images/ZapatosLimpios.png";
import tiendaZapatos from "../images/Pasillo.png";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-white pt-[2rem]">
    <div>
      {/* Contenedor principal del contenido de la sección "Sobre nosotros" */}
      <div className="about-full">
        <h2 className="about-title">Sobre nosotros</h2>
        {/* Encabezado que combina imagen e introducción de la tienda */}
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


      {/* Sección que muestra la misión de la tienda */}
      <section className="about-box mission">
        <div className="about-content text">
          <h3>Nuestra misión</h3>
          <p>
            Cree una tienda en línea en la que los clientes a nivel nacional puedan ver y adquirir
            zapatos de las marcas más reconocidas directamente de las marcas por medio de acuerdos
            con ellas y no de terceros. Pues es nuestra prioridad dar un sitio seguro de compra de
            zapatos auténticos a nuestros clientes.
          </p>
        </div>
      </section>


      {/* Sección que muestra la visión de la tienda e incluye una imagen ilustrativa */}
      <section className="about-box vision with-image">
        <div className="about-content">
          <h3>Nuestra visión</h3>
          <p>
            Ser la tienda en línea líder en cuanto a ventas de zapatos originales en el país,
            reconocida por la confiabilidad, autenticidad y calidad de cada uno de nuestros pares.
            Nos proyectamos como la primera opción de los clientes amantes del mundo de los zapatos
            con nuestro stock siempre disponible y garantizado.
          </p>
        </div>

        {/* Imagen decorativa bajo la visión */}
        <div className="about-vision-image">
          <img src={tiendaZapatos} alt="Tienda de zapatos" />
        </div>

        <div className="about-vision-bottom">
          <p>
            Con un equipo comprometido y un enfoque en la innovación, en Cholo's no solo vendemos
            calzado, creamos experiencias. ¡Únete a nuestra tribu y vive el ritmo de la ciudad con estilo!
          </p>
        </div>
      </section>

    </div>
    <Footer />
    </div>
  );
};

export default About;

