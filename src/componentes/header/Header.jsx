import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Claudia</a>
                
                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> Acerca de
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Habilidades
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Servicios
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#porfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Portafolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contacto
                            </a>
                        </li>
                    </ul>

                    <i className='uil uil-times nav__close'></i>
                </div>
                <div className="nav__toggle">
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;