import React from "react";
import "../../styles/Imagenes.css";
import Imagen1 from "../images/Imagen1.png";
import Imagen2 from "../images/Imagen2.png";
import Imagen3 from "../images/Imagen3.png";
import Imagen4 from "../images/Imagen4.png";

const Imagenes = () => {
  return (
    <div className="gallery-container"> {/* Contenedor principal de la galería */}

    {/* Sección superior: imagen principal destacada */}
      <div className="gallery-top">
        <img src={Imagen1} alt="Zapato principal" className="gallery-main-image" />
      </div>
      {/* Sección inferior: dos columnas de imágenes más pequeñas */}
      <div className="gallery-bottom">
        {/* Columna izquierda con dos imágenes pequeñas apiladas */}
        <div className="gallery-left">
          <img src={Imagen2} alt="Zapato 2" className="gallery-small-image" />
          <img src={Imagen3} alt="Zapato 3" className="gallery-small-image" />
        </div>
        {/* Columna derecha con una imagen alta */}
        <div className="gallery-right">
          <img src={Imagen4} alt="Zapato 4" className="gallery-tall-image" />
        </div>
      </div>
    </div>
  );
};

export default Imagenes;