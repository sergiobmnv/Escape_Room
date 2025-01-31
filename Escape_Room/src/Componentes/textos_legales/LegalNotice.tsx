import React from "react";
import "./legalNotice.css";
import { FiArrowLeft } from "react-icons/fi";

const LegalNotice: React.FC = () => {
  const handleGoBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="cookies-container">
      <h1 className="titulo">Política de Uso del Sitio Web</h1>

      <section className="section">
        <h2 className="subtitulos">1. Introducción</h2>
        <p className="texto">
          Esta Política de Uso del Sitio Web establece los términos y condiciones bajo los cuales los usuarios pueden acceder y utilizar nuestro sitio web.
        </p>
      </section>

      <section className="section">
        <h2 className="subtitulos">2. Aceptación de Términos</h2>
        <p className="texto">
          Al acceder a este sitio web, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo, te recomendamos que no utilices nuestro sitio.
        </p>
      </section>

      <section className="section">
        <h2 className="subtitulos">3. Uso Aceptable</h2>
        <p className="texto">
          Te comprometes a utilizar el sitio web de manera legal y responsable, y a no realizar actividades que puedan dañar o interferir con el funcionamiento del sitio.
        </p>
      </section>

      <section className="section">
        <h2 className="subtitulos">4. Propiedad Intelectual</h2>
        <p className="texto">
          Todo el contenido del sitio web, incluyendo textos, gráficos, logotipos y software, está protegido por derechos de autor y otras leyes de propiedad intelectual.
        </p>
      </section>

      <section className="section">
        <h2 className="subtitulos">5. Limitación de Responsabilidad</h2>
        <p className="texto">
          No nos hacemos responsables de los daños o perjuicios que puedan derivarse del uso o la imposibilidad de uso del sitio web.
        </p>
      </section>

      <section className="section">
        <h2 className="subtitulos">6. Modificaciones</h2>
        <p className="texto">
          Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Te recomendamos que revises esta política periódicamente.
        </p>
      </section>

      <section className="section">
        <h2 className="subtitulos">7. Legislación Aplicable</h2>
        <p className="texto">
          Estos términos se rigen por la legislación vigente en el país donde se encuentra el responsable del sitio web.
        </p>
      </section>

      <button className="go-back-btn" onClick={handleGoBack}>
        <FiArrowLeft size={20} style={{ marginRight: "8px" }} />
        Volver
      </button>
    </div>
  );
};

export default LegalNotice;