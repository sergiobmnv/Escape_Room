import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Element} from "react-scroll";
import { useInView } from 'react-intersection-observer';

import './flipCard.css';


interface FlipCardProps {
  image: string;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  buttonLabel: string;
  redirectPath: string;
}


const FlipCard: React.FC<FlipCardProps> = ({ image, frontContent, backContent, buttonLabel, redirectPath }) => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate(redirectPath);
  };

  // Lazy Loading para el las cartas.
  const {ref:flipRef, inView:flipInView} = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Element name = "viajesEnELTiempo">
    <div ref = {flipRef} className={`flip-card ${flipInView ? "visible":  "hidden"}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="" className="flip-card-image" />
          <div>{frontContent}</div>
        </div>
        <div className="flip-card-back">
          <div>{backContent}</div>
          <button onClick={handleButtonClick}>{buttonLabel}</button>
        </div>
      </div>
    </div>
    </Element>
  );
};

const FlipCardContainer: React.FC = () => {
  
  const cardsData = [
    { 
      image: 'FondoMedievalFlipCard.jpg', 
      front: '', 
      back: 'La Mazmora Secreta', 
      buttonLabel: 'Ir a Página ', 
      redirectPath: '/LaMazmorraSecreta',
    },
    { 
      image: 'FondoPostApocaliptico.jpg', 
      front: '', 
      back: 'Zona Radiactiva', 
      buttonLabel: 'Ir a Página ', 
      redirectPath: '/ZonaRadiactiva' 
    },
    { 
      image: 'FondoAntiguaRoma.jpg', 
      front: '', 
      back: 'La Tumba Imperial', 
      buttonLabel: 'Ir a Página ', 
      redirectPath: '/LaTumbaImperial' 
    },
    { 
      image: 'FondoFuturista.jpg', 
      front: '', 
      back: 'Tecnología Prohibida', 
      buttonLabel: 'Ir a Página ', 
      redirectPath: '/TecnologiaProhibida' 
    },
  ];

  // Lazy Loading para el titulo.
  const {ref:titleRef, inView:titleInView} = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Element name = "viajeEnElTiempo">
      
    <div id='viajeEnElTiempo' ref = {titleRef} className={`flip-card-container ${titleInView ? "visible":  "hidden"}`}>

      <h2 className="flip-card-title">Viajes En El Tiempo</h2>
      {cardsData.map((card, index) => (
        <FlipCard 
          key={index} 
          image={card.image} 
          frontContent={card.front} 
          backContent={card.back} 
          buttonLabel={card.buttonLabel} 
          redirectPath={card.redirectPath} 
        />
      ))}
    </div>
    </Element>
  );
};

export default FlipCardContainer;