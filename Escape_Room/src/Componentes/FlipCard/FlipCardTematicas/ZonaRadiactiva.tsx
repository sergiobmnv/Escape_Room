import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlipCardGenerar.css';

const ZonaRadiactiva: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className="template-container">

      {/* Encabezado con logo */}
      <section className="template-header">
        <div className="template-header-content">
          <h3>La Zona Radiactiva</h3>
        </div>
      </section>

      {/* Slogan */}
      <section className="template-slogan">
        <p>¡Vive la experiencia definitiva!</p>
      </section>

      {/* Descripción principal */}
      <section className="template-description">
        <h2>Sobre nosotros</h2>
        <p>
          Bienvenido a nuestro Escape Room. Disfruta de una experiencia única 
          que mezcla enigmas, diversión y aventura. Reúne a tu equipo y prepárate 
          para superar desafíos inolvidables. ¡Te esperamos!
        </p>
      </section>

      {/* Sección de actividades */}
      <section className="template-extra-section">
        <h2>Descubre nuestras aventuras</h2>
        <div className="template-extra-grid">
          <div className="template-extra-card">
            <img src="/zona_radiactiva_2.jpg" alt="Zona Radiactiva" />
            <h3>Zona Radiactiva</h3>
            <p>
              Atrévete a cruzar las fronteras de lo desconocido en la Zona Prohibida, 
              un lugar lleno de secretos oscuros. ¡El desafío te espera!
            </p>
          </div>
          <div className="template-extra-card">
            <img src="/zona_radiactiva_3.jpg" alt="Aventura Radiactiva" />
            <h3>Aventura Radiactiva</h3>
            <p>
              Infiltrate instalaciones secretas y descubre los oscuros experimentos 
              que dejaron huellas radiactivas. ¡Peligro en cada esquina!
            </p>
          </div>
        </div>
      </section>

      {/* Sección adicional */}
      <section className="template-extra-section">
        <h2>¡Nuestro Escape Room es perfecto para!</h2>
        <div className="template-extra-grid">
          <div className="template-extra-card">
            <img src="/Familia.png" alt="Icono amigos o familia" />
            <h3>Juega con amigos o familia</h3>
            <p>Perfecto para pasar un buen rato juntos.</p>
          </div>
          <div className="template-extra-card">
            <img src="/Niños.png" alt="Icono niños" />
            <h3>Apto para niños</h3>
            <p>¡Los más pequeños también se divertirán!</p>
          </div>
          <div className="template-extra-card">
            <img src="/Cumpleaños.png" alt="Icono celebraciones" />
            <h3>Ideal para celebraciones</h3>
            <p>Disfruta en cumpleaños y eventos especiales.</p>
          </div>
          <div className="template-extra-card">
            <img src="/Desafio.png" alt="Icono nuevos retos" />
            <h3>Nuevas aventuras</h3>
            <p>¡Pronto añadiremos más desafíos!</p>
          </div>
        </div>
      </section>

      {/* Botón de regreso a la página principal */}
      <div className="button-container">
        <button className="back-button" onClick={() => navigate('/')}>
          Volver a la Página Principal
        </button>
      </div>
      
    </div>
  );
};

export default ZonaRadiactiva;
