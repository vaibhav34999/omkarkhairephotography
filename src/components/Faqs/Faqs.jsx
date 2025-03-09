import React, { useState } from 'react';
import './faqs.scss';
import { LEFT_FAQ_CONSTANST, RIGHT_FAQ_CONSTANST } from '../../constants/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';


const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='faq-container'>
      <div className='container'>
        <div className='title-box'>
          <h6 className='short-text'>FAQ’s</h6>
          <h2 className='full-text'>Frequently Asked Questions</h2>
        </div>
        <div className='contain-box'>
          <div className='left-box'>
            {LEFT_FAQ_CONSTANST.map((faq, index) => (
              <div key={faq.key} className="faq-item">
                <button className="faq-question" onClick={() => toggleAccordion(faq.key)}>
                  <h6 className='question-text'>{faq.question}</h6>
                  <div className='arrow'>
                    {openIndex === faq.key ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                  </div>
                </button>
                {openIndex === faq.key && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
          <div className='right-box'>
            {RIGHT_FAQ_CONSTANST.map((faq, index) => (
              <div key={faq.key} className="faq-item">
                <button className="faq-question" onClick={() => toggleAccordion(faq.key)}>
                  <h6 className='question-text'>{faq.question}</h6>
                  <div className='arrow'>
                    {openIndex === faq.key ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                  </div>
                </button>
                {openIndex === faq.key && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Faqs
