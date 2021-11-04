import React from 'react'
import deadliftImg from '../assets/image001.png'
import dumbbellImg from '../assets/image002.png'

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="about__row">
                        <div className="about__row--wrapper">
                            <h2 className="about__title">
                                WHO WE ARE
                            </h2>
                            <p className="about__para">
                                Are you sick of gym memberships that quickly lose your interest? Forged Athlete Training Systems is a fitness community geared to bring physical wellness to people and help them reach their individual goals. We do this by bringing you into our community of fitness and giving you specific coaching and programming you need to reach your goals.
                            </p>
                            <a href="#plans">
                                <button className="btn about__btn">
                                    Sign Up Today
                                </button>
                            </a>
                        </div>
                        <div className="about__container--img--wrapper">
                            <img src={deadliftImg} className="deadlift--img" alt="" />
                        </div>
                    </div>
                    <div id="coaching" className="about__row about__reverse">
                        <div className="about__container--img--wrapper">
                            <img src={dumbbellImg} className="dumbbell--img" alt="" />
                        </div>
                        <div className="about__row--wrapper">
                            <h2 className="about__title">
                                SUPERIOR COACHING AND EXPERIENCE
                            </h2>
                            <p className="about__para">
                                Forged Athlete Training Systems is owned at operated by CrossFit Level 1 Trainer Luis Vargas. Luis has been involved with CrossFit for almost a decade and has competed in many high level events. He is a natural and encouraging teacher who can help both the beginning and advanced athlete. Luis is a big believer that each individual client should be given careful personalized instruction to help them reach their goals.
                            </p>
                            <a href="#plans">
                                <button className="btn about__btn">
                                    EXPLORE OUR FITNESS PLANS
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About
