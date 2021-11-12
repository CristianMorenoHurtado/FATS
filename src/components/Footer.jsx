import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logoFooter from '../assets/FATS-logo-only.svg'

const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="footer__wrapper">
                        <a href="#navigation">
                            <img src={logoFooter} alt="" className="logo footer__logo" />
                        </a>
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
                        <span className="footer__copyright">
                            Copyright &copy; Forged Athlete Training Systems
                        </span>
                        <span className="footer__copyright">
                            Website Designed by <a href="https://cristianmorenohurtado.github.io/" className="footer__cris" target="_blank" rel="noreferrer">Cristian Moreno</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer
