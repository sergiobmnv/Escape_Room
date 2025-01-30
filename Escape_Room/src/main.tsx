import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import { Analytics } from '@vercel/analytics/react';
import Header from './Componentes/Header/header.tsx';
import FlipCard from './Componentes/FlipCard/flipCard.tsx';
import Calendario from './Componentes/Calendario/calendario.tsx';
import Resenias from './Componentes/Reseñas/resenias.tsx';
import Galeria from './Componentes/Galeria/galeria.tsx';
import Ubicacion from './Componentes/Ubicacion/ubicacion.tsx';
import Footer from './Componentes/Footer/footer.tsx';

import CookieBaner from './Componentes/cookiBanner/cookieBaner.tsx';

import LaMazmoraSecreta from './Componentes/FlipCard/FlipCardTematicas/LaMazmorraSecreta.tsx';
import ZonaRadiactiva from './Componentes/FlipCard/FlipCardTematicas/ZonaRadiactiva.tsx';
import LaTumbaImperial from './Componentes/FlipCard/FlipCardTematicas/LaTumbaImperial.tsx';
import TecnologiaProhibida from './Componentes/FlipCard/FlipCardTematicas/TecnologiaProhibida.tsx';

import AvisoLegal from './Componentes/textos_legales/LegalNotice.tsx';
import Privacidad from './Componentes/textos_legales/Privacidad.tsx';
import Cookies from './Componentes/textos_legales/Cookies.tsx';

const Preloader: React.FC = () => (
  <div className="preloader">
    <div className="logo-container">
      <img src="/Preloader.gif" alt="Logo" className="logo_preloader" />
      <div className="shadow"></div>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home: React.FC = () => (
  <>
    <Analytics />
    <Header />
    <FlipCard />
    <Calendario />
    <Resenias />
    <Galeria />
    <Ubicacion />
    <Footer />
    <CookieBaner />
  </>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal-notice" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path='/LaMazmorraSecreta' element={<LaMazmoraSecreta />} />
          <Route path='/ZonaRadiactiva' element={<ZonaRadiactiva />} />
          <Route path='/LaTumbaImperial' element={<LaTumbaImperial />} />
          <Route path='/TecnologiaProhibida' element={<TecnologiaProhibida />} />
        </Routes>
      )}
    </Router>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);