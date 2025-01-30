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

const TecnologiaProhibida: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="template-container">
      {/* Encabezado con logo */}
      <header className="template-header">
        <h3>La Tecnología Prohibida</h3>
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
            imgSrc="/TecnologiaProhibida-2.jpg"
            altText="Tecnología Prohibida"
            title="Tecnología Prohibida"
            description="En un futuro distópico, desactiva tecnología peligrosa y evita la destrucción. ¡El destino está en tus manos!"
          />
          <Card
            imgSrc="/TecnologiaProhibida-3.jpg"
            altText="Aventura Tecnológica"
            title="Aventura Tecnológica"
            description="Adéntrate en un laboratorio secreto, desactiva sistemas de seguridad y descifra códigos para salvar el futuro."
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

export default TecnologiaProhibida;
