import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Location = () => {
    return (
        <section id="location">
            <div className="container">
                <div className="row">
                    <h2 className="location__title">
                        <FontAwesomeIcon icon='map-marker-alt' /> 125 Talmadge Drive, Moultrie, GA 31768
                    </h2>
                    <div className="map__wrapper">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5740.939480917412!2d-83.77351033902923!3d31.176843607931428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x39ab57390b2f1b91!2sForged%20Athlete%20Training%20Systems!5e0!3m2!1sen!2sus!4v1635702948462!5m2!1sen!2sus" title="myLocation" allowFullScreen="" className="map" loading="lazy">
                    </iframe>
                    </div> 
                </div>
            </div>
        </section>
        
        
    )
}

export default Location
