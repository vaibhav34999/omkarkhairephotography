import React from 'react';
import "./button.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Button = ({ btnText }) => {
    return (
        <button className='button'>
            {btnText}
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    )
}

export default Button


