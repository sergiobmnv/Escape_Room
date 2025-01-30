import { Element } from "react-scroll";
import { useInView } from 'react-intersection-observer';

import './ubicacion.css';


export default function Ubicacion() {


  // Lazy Loading para el las cartas.
  const {ref:ubicacionRef, inView:ubicacionInView} = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Element name="ubicacion">
      <div ref = {ubicacionRef} className={`ubicacion-container ${ubicacionInView ? "visible":  "hidden"}`}>
        <h2 className="ubicacion-title">¿Quieres contactar con nosotros?</h2>
        
        {/* Contenedor para WhatsApp y Mapa */}
        <div className="ubicacion-content">
          {/* Sección de contacto de WhatsApp */}
          <div className="whatsapp-card">
            <div className="whatsapp-content">
              <h3 className="contactanos">Contáctanos por WhatsApp</h3>
              <p>¿Tienes dudas o necesitas más información? Estamos aquí para ayudarte. ¡Envíanos un mensaje!</p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                Enviar mensaje
              </a>
            </div>
          </div>

          <iframe
            className="ubicacion-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1450.6417890637572!2d-5.132007593305114!3d43.35017853065143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3621ed4f93621b%3A0xcfe0b1ea7e423b1a!2sPuente%20medieval%20de%20Cangas%20de%20On%C3%ADs%2FCangues%20d&#39;On%C3%ADs!5e0!3m2!1ses!2ses!4v1736928452668!5m2!1ses!2ses"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Element>
  );
}