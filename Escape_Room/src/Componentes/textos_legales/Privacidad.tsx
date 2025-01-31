import React from "react";
import "./legalNotice.css";
import { FiArrowLeft } from "react-icons/fi";

const PrivacyPolicy: React.FC = () => {
  const handleGoBack = () => window.history.back();

  return (
    <div className="cookies-container">
      <h1 className="titulo">Política de Privacidad</h1>
      <p className="texto">
        En esta Política de Privacidad, te informamos sobre cómo recopilamos, usamos y protegemos tus datos personales cuando utilizas nuestro sitio web.
      </p>

      <h2 className="subtitulos">¿Qué datos recopilamos?</h2>
      <p className="texto">
        Recopilamos información que nos proporcionas directamente, como tu nombre, dirección de correo electrónico y cualquier otra información que decidas compartir con nosotros.
      </p>

      <h2 className="subtitulos">¿Cómo utilizamos tus datos?</h2>
      <p className="texto">
        Utilizamos tus datos para:
      </p>
      <ul className="texto">
        <li><strong>Proporcionar servicios:</strong> Para ofrecerte la información y los servicios que solicitas.</li>
        <li><strong>Mejorar nuestro sitio:</strong> Para entender cómo se utiliza nuestro sitio y mejorar la experiencia del usuario.</li>
        <li><strong>Comunicación:</strong> Para enviarte actualizaciones, promociones y otra información relevante.</li>
      </ul>

      <h2 className="subtitulos">Protección de tus datos</h2>
      <p className="texto">
        Implementamos medidas de seguridad adecuadas para proteger tus datos personales contra el acceso no autorizado, la divulgación, la alteración o la destrucción.
      </p>

      <h2 className="subtitulos">Tus derechos</h2>
      <p className="texto">
        Tienes derecho a acceder, corregir o eliminar tus datos personales. Si deseas ejercer estos derechos, contáctanos a través de la información proporcionada en nuestro sitio.
      </p>

      <h2 className="subtitulos">Cambios en esta política</h2>
      <p className="texto">
        Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Te notificaremos sobre cualquier cambio publicando la nueva política en esta página.
      </p>

      <button className="go-back-btn" onClick={handleGoBack}>
        <FiArrowLeft size={20} style={{ marginRight: "8px" }} />
        Volver
      </button>
    </div>
  );
};

export default PrivacyPolicy;