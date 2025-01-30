import { useEffect, useState } from 'react';
import './cookieBaner.css';

const CookieBanner: React.FC = () => {
    const [isVisible, setVisible] = useState(true);
    const [showCookieIcon, setShowCookieIcon] = useState(false);

    const aceptarCookies = () => {
        setVisible(false);
        setShowCookieIcon(false);
        localStorage.setItem('cookiesAceptadas', 'true');

        // Obtener la ubicación del usuario
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    // Definir la cookie correctamente
                    const locationCookie = `userLocation=${latitude},${longitude}; path=/; max-age=604800`; // Expira en 7 días
                    document.cookie = locationCookie;
                    console.log("Ubicación almacenada como cookie:", locationCookie);
                },
                (error) => {
                    console.error("Error obteniendo la ubicación:", error.message);
                }
            );
        } else {
            console.warn("La geolocalización no está soportada por este navegador.");
        }
    };

    const rechazarCookies = () => {
        setVisible(false);
        setShowCookieIcon(true);
        localStorage.setItem('cookiesAceptadas', 'false');
    };

    const CookieIconClick = () => {
        setVisible(true);
        setShowCookieIcon(false);
    };

    useEffect(() => {
        const cookies = localStorage.getItem('cookiesAceptadas');
        if (cookies === 'true') {
            setVisible(false);
            setShowCookieIcon(false);
        } else if (cookies === 'false') {
            setVisible(false);
            setShowCookieIcon(true);
        }
    }, []);

    return (
        <>
            {isVisible && (
                <div className="cookie-banner">
                    <p className="titulo">Este sitio utiliza cookies</p>
                    <p className="texto">
                        Usamos cookies para mejorar tu experiencia de usuario y adaptar 
                        nuestro contenido en función de tu ubicación. Al aceptar, autorizas 
                        la recopilación de tu ubicación geográfica con fines de personalización 
                        y análisis. Puedes rechazar o cambiar esta configuración más tarde.
                    </p>
                    <div className="cookie-buttons">
                        <button className="cookie-button aceptar" onClick={aceptarCookies}>
                            Aceptar
                        </button>
                        <button className="cookie-button rechazar" onClick={rechazarCookies}>
                            Rechazar
                        </button>
                    </div>
                </div>
            )}
            {showCookieIcon && (
                <div className="cookie-icon" onClick={CookieIconClick}>
                    🍪
                </div>
            )}
        </>
    );
};

export default CookieBanner;
