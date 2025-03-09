import React from 'react';
import "./social-media-button.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaButton = () => {
    return (
        <div className='social-container'>
            <div className='social-box'>
                <a className="btn" href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="btn" href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="btn" href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </div>
    )
}

export default SocialMediaButton
