import React from 'react'
import logo from '../assets/FATS-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
    function openMenu(){
        document.body.classList += ' menu--open'
    }
    function closeMenu(){
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
                    <button className="btn__menu" onClick={ openMenu }>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={ closeMenu }>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links" onClick={ closeMenu }>
                        <li className="menu__list">
                            <a href="#about" className="menu__link">
                                About Us
                            </a>
                        </li>
                        <li className="menu__list" onClick={ closeMenu }>
                            <a href="#coaching" className="menu__link">
                                Coaching
                            </a>
                        </li>
                        <li className="menu__list" onClick={ closeMenu }>
                            <a href="#plans" className="menu__link">
                                Pricing
                            </a>
                        </li>
                        <li className="menu__list" onClick={ closeMenu }>
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
