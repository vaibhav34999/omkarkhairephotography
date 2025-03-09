import React from 'react';
import "./footer.scss";
import SocialMediaButton from '../../common/components/SocialMediaButton';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-menu-box'>
          <div className='container'>
            <div className='menu-left-box'>
                <h6 className='home-photo-text'>A more meaningful home for photography</h6>
                <div className='lets-work-box'>
                  <div className='lets-box'>
                    <h5 className='lets-text'>Let’s</h5>
                    <button className='btn'>
                        <img src='content/dam/images/icon/arrow-icon.svg' alt='arrow' />
                    </button>
                  </div>
                  <h5 className='work-text'>Work Together </h5>
                </div>
            </div>
            <div className='menu-right-box'>
                <div className='each-menu-box'>
                  <h6 className='title'>Home</h6>
                  <ul className='menu-li'>
                    <li className='menu'>About Me</li>
                    <li className='menu'>My Works</li>
                    <li className='menu'>Testimonials</li>
                  </ul>
                </div>
                <div className='each-menu-box'>
                  <h6 className='title'>Clients</h6>
                  <ul className='menu-li'>
                    <li className='menu'>Klovesto</li>
                    <li className='menu'>MenVol</li>
                  </ul>
                </div>
                <div className='each-menu-box'>
                  <h6 className='title'>Portfolio</h6>
                  <ul className='menu-li'>
                    <li className='menu'>Events</li>
                    <li className='menu'>Portrait</li>
                    <li className='menu'>Branding</li>
                    <li className='menu'>Commerciale</li>
                    <li className='menu'>Wedding</li>
                  </ul>
                </div>
                <div className='each-menu-box'>
                  <h6 className='title'>Services</h6>
                  <ul className='menu-li'>
                    <li className='menu'>Portraits</li>
                    <li className='menu'>Events</li>
                    <li className='menu'>Commercial</li>
                  </ul>
                </div>
            </div>
          </div>
      </div>
      <div className='footer-nav-box'>
          <div className='container'>
              <div className='term-condition-box'>
                <span className='term-condition-text'>Terms & Conditions</span>
                <span className='privacy-policy-text'>Privacy Policy</span>
              </div>

              <SocialMediaButton/>
              <p className='all-rights-text'>© 2025 Omkar Khaire Photography. All rights reserved.</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer
