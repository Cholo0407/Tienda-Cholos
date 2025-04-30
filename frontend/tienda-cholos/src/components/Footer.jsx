import React from "react";
import "../../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Cholo's</h4>
          <p><strong>Dirección:</strong></p>
          <p>Avenida Aguilares 218</p>
          <p>CP San Salvador: San Salvador 1101</p>
          <p><strong>Contacto:</strong></p>
          <p>1800 123 6547</p>
          <p>info@cholosfootwear.com</p>
          <div className="footer-social">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>
        <div className="footer-column">
          <h4>Tienda</h4>
          <p>Sobre nosotros</p>
        </div>
        <div className="footer-column">
          <h4>Política de privacidad</h4>
          <p>Términos y condiciones</p>
          <p>Devoluciones</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2024 Cholo's. Todos los derechos reservados.</p>
        <p>
          <span>Política de privacidad</span> | <span>Términos y condiciones</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
