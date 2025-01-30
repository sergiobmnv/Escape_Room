import { Element } from "react-scroll";
import { useInView } from 'react-intersection-observer';

import "./resenias.css";

export default function Renesias() {
  const reviews = [
    {
      name: 'Juan Pérez',
      comment: '¡Una experiencia increíble! Los acertijos eran desafiantes y muy divertidos.',
      rating: 5,
    },
    {
      name: 'María López',
      comment: 'Me encantó la ambientación. Definitivamente volveré para probar otra habitación.',
      rating: 4,
    },
    {
      name: 'Sergio Romero',
      comment: 'Un poco difícil, pero muy emocionante. ¡Recomendado para grupos!',
      rating: 4,
    },
  ];

   // Lazy Loading para el las cartas.
    const {ref:reseniasRef, inView:reseniasInView} = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

  return (
    <Element name="resenias">
      <div ref = {reseniasRef} className={`container ${reseniasInView ? "visible":  "hidden"}`}>
        <h2 className="title">Reseñas de nuestros clientes</h2>
        <div className="reviews-columns">
          {reviews.map((review, index) => (
            <div key={index} className="review-column">
              <h3>{review.name}</h3>
              <p>Calificación: {review.rating} ⭐</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}