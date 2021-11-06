import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Form = () => {
    return (
        <section id="form">
            <div className="container">
                <div className="row">
                    <form id="contact--form" >
                        <h2 className="form__title">Questions?</h2>
                        <div className="form__item">
                            <label className="form__item--label" required>Name</label>
                            <div className="form__item--name">
                                <input type="text" name="user_name" className="form__input" />
                            </div>
                        </div>
                        <div className="form__item">
                            <label className="form__item--label">Phone Number</label>
                            <input type="tel" className="form__input" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="123-456-7890" />
                        </div>
                        <div className="form__item">
                            <label className="form__item--label">Email</label>
                            <input type="email" className="form__input" required />
                        </div>
                        <div className="form__item form__item--message">
                            <label className="form__item--label">Comment or Message</label>
                            <textarea type="text" className="form__input form__input--textarea" required />
                        </div>
                        <div className="form__submit--btn">
                            <button className="btn form__submit no-cursor">
                                Submit
                                <span className="thank__you--sent">
                                    Sent!
                                </span>
                            </button>
                            <div className="thank__you--loading ">
                                <FontAwesomeIcon className="spinner" icon="spinner"> </FontAwesomeIcon>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Form
