import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { useInView } from 'react-intersection-observer';

import "./galeria.css";


const images = [
  "/FondoGaleriaFotos-1.jpg",
  "/FondoGaleriaFotos-2.jpg",
  "/FondoGaleriaFotos-3.jpg",
  "/FondoGaleriaFotos-4.jpg",
];

export default function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); //Cambia de imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

// Lazy Loading para la galeria.
  const {ref:galeriaRef, inView:galeriaInView} = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

  return (
    <Element name="galeria">
      <div ref = {galeriaRef} className={`galeria-wrapper ${galeriaInView ? "visible":  "hidden"}`}>
        <h1 className="galeria-title">Galería de Imágenes</h1>
        <div className="galeria-container">
          <div
            className="galeria-image"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          >
            <div className="overlay">
              <p className="description-text">"Explora nuestras salas de escape únicas y desafiantes. Cada habitación está 
                    diseñada para ofrecerte una experiencia inolvidable llena de misterio, adrenalina y trabajo en equipo. 
                    Desde acertijos intrincados hasta atmósferas envolventes, cada uno de nuestros escapes te llevará a un mundo 
                    completamente diferente. ¿Estás listo para aceptar el 
                    desafío y poner a prueba tus habilidades? ¡Aventura y emoción te esperan en cada esquina!"</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
