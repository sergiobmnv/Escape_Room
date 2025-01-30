import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlipCardGenerar.css';

// Componente de sección reutilizable
const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="template-section">
    {title && <h2>{title}</h2>}
    {children}
  </section>
);

// Componente de tarjeta reutilizable
const Card: React.FC<{ imgSrc: string; altText: string; title: string; description: string }> = ({ imgSrc, altText, title, description }) => (
  <div className="template-extra-card">
    <img src={imgSrc} alt={altText} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const ZonaRadiactiva: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="template-container">
      {/* Encabezado con logo */}
      <header className="template-header">
        <h3>La Zona Radiactiva</h3>
      </header>

      {/* Sección de slogan */}
      <Section>
        <p>¡Vive la experiencia definitiva!</p>
      </Section>

      {/* Sección de descripción */}
      <Section title="Sobre nosotros">
        <p>
          Bienvenido a nuestro Escape Room. Disfruta de una experiencia única
          que mezcla enigmas, diversión y aventura. Reúne a tu equipo y prepárate
          para superar desafíos inolvidables. ¡Te esperamos!
        </p>
      </Section>

      {/* Sección de aventuras */}
      <Section title="Descubre nuestras aventuras">
        <div className="template-extra-grid">
          <Card
            imgSrc="/zona_radiactiva_2.jpg"
            altText="Zona Radiactiva"
            title="Zona Radiactiva"
            description="Atrévete a cruzar las fronteras de lo desconocido en la Zona Prohibida, un lugar lleno de secretos oscuros. ¡El desafío te espera!"
          />
          <Card
            imgSrc="/zona_radiactiva_3.jpg"
            altText="Aventura Radiactiva"
            title="Aventura Radiactiva"
            description="Infiltrate instalaciones secretas y descubre los oscuros experimentos que dejaron huellas radiactivas. ¡Peligro en cada esquina!"
          />
        </div>
      </Section>

      {/* Sección de "Perfecto para..." */}
      <Section title="¡Nuestro Escape Room es perfecto para!">
        <div className="template-extra-grid">
          <Card imgSrc="/Familia.png" altText="Icono amigos o familia" title="Juega con amigos o familia" description="Perfecto para pasar un buen rato juntos." />
          <Card imgSrc="/Niños.png" altText="Icono niños" title="Apto para niños" description="¡Los más pequeños también se divertirán!" />
          <Card imgSrc="/Cumpleaños.png" altText="Icono celebraciones" title="Ideal para celebraciones" description="Disfruta en cumpleaños y eventos especiales." />
          <Card imgSrc="/Desafio.png" altText="Icono nuevos retos" title="Nuevas aventuras" description="¡Pronto añadiremos más desafíos!" />
        </div>
      </Section>

      {/* Botón de regreso */}
      <div className="button-container">
        <button className="back-button" onClick={() => navigate('/')}>Volver a la Página Principal</button>
      </div>
    </div>
  );
};

export default ZonaRadiactiva;
