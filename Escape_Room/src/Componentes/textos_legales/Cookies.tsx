import React from "react";
import "./legalNotice.css";
import { FiArrowLeft } from "react-icons/fi";

const Cookies: React.FC = () => {
  const handleGoBack = () => window.history.back();

  return (
    <div className="cookies-container">
      <h1 className="titulo">Política de Cookies</h1>
      <p className="texto">
        Utilizamos cookies para mejorar la experiencia de usuario, analizar el tráfico y personalizar el contenido. Al continuar navegando, aceptas nuestro uso de cookies.
      </p>

      <h2 className="subtitulos">¿Qué son las cookies?</h2>
      <p className="texto">
        Las cookies son pequeños archivos almacenados en tu dispositivo que ayudan a mejorar la funcionalidad de la web y recopilar información sobre tu navegación.
      </p>

      <h2 className="subtitulos">Tipos de cookies que usamos</h2>
      <ul className="texto">
        <li><strong>Esenciales:</strong> Necesarias para el funcionamiento del sitio web.</li>
        <li><strong>Analíticas:</strong> Permiten medir y analizar la navegación.</li>
        <li><strong>Personalización:</strong> Guardan preferencias de usuario.</li>
        <li><strong>Publicitarias:</strong> Utilizadas para mostrar anuncios relevantes.</li>
      </ul>

      <h2 className="subtitulos">Gestionar cookies</h2>
      <p className="texto">
        Puedes aceptar, rechazar o configurar las cookies en la configuración de tu navegador. Para más detalles, consulta nuestra <a href="/privacy-policy">Política de Privacidad</a>.
      </p>
      
      <button className="go-back-btn" onClick={handleGoBack}>
        <FiArrowLeft size={20} style={{ marginRight: "8px" }} />
        Volver
      </button>
    </div>
  );
};

export default Cookies;
