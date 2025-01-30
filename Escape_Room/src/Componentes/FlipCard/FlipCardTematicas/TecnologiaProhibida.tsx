import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlipCardGenerar.css';

const TecnologiaProhibida: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="template-container">

      {/* Encabezado con logo */}
      <section className="template-header">
        <div className="template-header-content">
          <h3>La Tecnología Prohibida</h3>
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
            <img src="/TecnologiaProhibida-2.jpg" alt="Tecnología Prohibida" />
            <h3>Tecnología Prohibida</h3>
            <p>
              En un futuro distópico, desactiva tecnología peligrosa y evita la destrucción. ¡El destino está en tus manos!
            </p>
          </div>
          <div className="template-extra-card">
            <img src="/TecnologiaProhibida-3.jpg" alt="Aventura Tecnológica" />
            <h3>Aventura Tecnológica</h3>
            <p>
              Adéntrate en un laboratorio secreto, desactiva sistemas de seguridad y descifra códigos para salvar el futuro.
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

export default TecnologiaProhibida;
