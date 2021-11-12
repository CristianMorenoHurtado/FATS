import React from 'react'
import logo from '../assets/FATS-logo.svg'
import logoOnly from '../assets/FATS-logo-only.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
    function openMenu() {
        document.body.classList += ' menu--open'
    }
    function closeMenu() {
        document.body.classList.remove('menu--open')
    }

    return (
        <nav>
            <div id="navigation" className="nav__container">
                <a href="/">
                    <img src={logo} alt="" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="#about" className="nav__link link__hover-effect">About Us</a>
                    </li>
                    <li className="nav__list">
                        <a href="#coaching" className="nav__link link__hover-effect">Coaching</a>
                    </li>
                    <li className="nav__list">
                        <a href="#plans" className="nav__link link__hover-effect">Pricing</a>
                    </li>
                    <li className="nav__list">
                        <a href="#schedule" className="nav__link link__hover-effect">Hours</a>
                    </li>
                    <li className="nav__list nav__list--icon">
                        <a href="#plans" className="nav__link--join">
                            Join Us
                        </a>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <img src={logoOnly} alt="" className="logo footer__logo" />
                    <ul className="footer__list">
                        <li className="footer__list--item">
                            <a href="tel:229-231-1359" className="footer__icon" rel="noreferrer">
                                <FontAwesomeIcon className="footer__icon--hover" icon="mobile-alt" />
                            </a>
                        </li>
                        <li className="footer__list--item">
                            <a href="mailto:info@forgedathletetrainingsystems.com" className="footer__icon" rel="noreferrer">
                                <FontAwesomeIcon className="footer__icon--hover" icon="envelope" />
                            </a>
                        </li>
                        <li className="footer__list--item">
                            <a href="https://www.facebook.com/Forged-Athlete-Training-Systems-101729081943331" className="footer__icon" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="footer__icon--hover" icon={['fab', 'facebook-f']} />
                            </a>
                        </li>
                        <li className="footer__list--item">
                            <a href="https://www.instagram.com/forged.athlete/?hl=en" className="footer__icon" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="footer__icon--hover" icon={['fab', 'instagram']} />
                            </a>
                        </li>
                    </ul>
                    <ul className="menu__links" onClick={closeMenu}>
                        <li className="menu__list">
                            <a href="#about" className="menu__link">
                                About Us
                            </a>
                        </li>
                        <li className="menu__list" onClick={closeMenu}>
                            <a href="#coaching" className="menu__link">
                                Coaching
                            </a>
                        </li>
                        <li className="menu__list" onClick={closeMenu}>
                            <a href="#plans" className="menu__link">
                                Pricing
                            </a>
                        </li>
                        <li className="menu__list" onClick={closeMenu}>
                            <a href="#schedule" className="menu__link">
                                Hours
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
