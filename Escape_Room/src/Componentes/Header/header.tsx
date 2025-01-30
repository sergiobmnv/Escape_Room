import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Element } from "react-scroll";
import './header.css';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const cerrarMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <Element name="home">
                <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                    {/* Logo */}
                    <div className="logo">
                        <ScrollLink to="home" smooth={true} duration={1000}>
                            <img src="Logo.png" alt="Logo" className="logo-image" />
                        </ScrollLink>
                    </div>

                    {/* Navigation */}
                    <nav className="nav">
                        <ScrollLink to="viajesEnElTiempo" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Viajes en el tiempo</ScrollLink>
                        <ScrollLink to="calendario" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Reserva ya</ScrollLink>
                        <ScrollLink to="resenias" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Reseñas</ScrollLink>
                        <ScrollLink to="galeria" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Galeria</ScrollLink>
                        <ScrollLink to="ubicacion" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Ubicación</ScrollLink>
                        <ScrollLink to="contacto" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Servicios</ScrollLink>
                    </nav>

                    {/* Botón menú móvil */}
                    <div className="menu-icon" onClick={toggleMenu}>
                        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                    </div>

                    {/* Menú móvil */}
                    <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
                        <ScrollLink to="viajesEnElTiempo" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Viajes en el tiempo</ScrollLink>
                        <ScrollLink to="calendario" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Reserva ya</ScrollLink>
                        <ScrollLink to="resenias" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Reseñas</ScrollLink>
                        <ScrollLink to="galeria" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Galeria</ScrollLink>
                        <ScrollLink to="ubicacion" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Ubicación</ScrollLink>
                        <ScrollLink to="contacto" smooth={true} duration={1000} className="nav-link" onClick={cerrarMenu}>Servicios</ScrollLink>
                    </nav>
                </header>

                {/* Hero */}
                <div className="hero">
                    <h1 className="hero-text">Aventurate a nuetro Escape Room</h1>
                </div>
            </Element>
        </>
    );
};

export default Header;