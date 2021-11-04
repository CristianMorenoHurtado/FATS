import React from 'react'
import HeaderImage from '../assets/Header.jpg'

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__img--wrapper">
                        <div className="header__img">
                            <img src={HeaderImage} alt="" />
                        </div>                         
                    </div>
                    <div className="header__description">
                        <h2 className="header__title">
                            Ready to become a Forged Athlete?
                        </h2>
                        <a href="#plans">
                             <button className="header__btn btn__hover-effect">
                            Sign Up Today
                        </button>
                        </a>                     
                    </div>
                    
                </div>
            </header>
        </section>
    )
}

export default Landing
