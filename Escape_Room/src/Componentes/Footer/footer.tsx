import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {Element} from "react-scroll";

const Footer: React.FC = () => {
  return (
    <Element name = "contacto">
    <footer className="footer-container">
      <div className="footer-column">
        <img src="Logo.png" alt="Logo" className="footer-logo" />
        <div className="social-icons">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-column">
        <h3 className="servicioYInformacio">Servicios</h3>
        <ul className="footer-links">
        <li><a
            href="tel:645333529"
            target="_blank"
            rel="noopener noreferrer"
          >
            +34 685 26 28 25
          </a></li>
          <li><a
            href="mailto:sergiobmnv@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            sergiobmnv@gmail.com
          </a></li>
          <li><a
            href="mailto:escapeRoom@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            escapeRoom@gmail.com
          </a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="servicioYInformacio">Información Legal</h3>
        <ul className="footer-links">
          <li><Link to="/Legal-notice">Aviso Legal</Link></li>
          <li><Link to="/Privacidad">Política de Privacidad</Link></li>
          <li><Link to="/cookies">Política de Cookies</Link></li>
        </ul>
      </div>
    </footer>
    </Element>
  );
};

export default Footer;