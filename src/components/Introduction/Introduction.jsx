import React from 'react';
import './introduction.scss';
import SocialMediaButton from '../../common/components/SocialMediaButton';
import Button from '../../common/components/Button';


const Introduction = () => {
    return (
        <div className='intoduction-container'>
            <div className='container'>
                <div className='title-box'>
                    <div className='title'>
                        <h6 className='about-text'>ABOUT</h6>
                        <h5 className='omkar-text'>I AM OMKAR</h5>
                    </div>
                    <Button btnText={"Know More"} />
                </div>
                <div className='details-box'>
                    <div className='left-box'>
                        <div class="corner top left"></div>
                        <div class="corner top right"></div>
                        <div class="corner bottom left"></div>
                        <div class="corner bottom right"></div>
                        <img className='img' alt='profile' src='/content/dam/images/omkar-profile.jpg' />
                    </div>
                    <div className='right-box'>
                        <div className='intro-box'>
                            <div className='title-box'>
                                <img className='img' alt='profile' src='/content/dam/images/icon/star-icon.svg' />
                                <h6 className='title'>Introduction</h6>
                            </div>
                            <p className='para'>My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the India, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.</p>
                        </div>
                        <div className='contact-info'>
                            <div className='title-box'>
                                <img className='img' alt='profile' src='/content/dam/images/icon/star-icon.svg' />
                                <h6 className='title'>Contact Information</h6>
                            </div>
                            <div className='contact-details-box'>
                                <div className='contact-info-box'>
                                    <div className='each-box'>
                                        <h5 className='label'>Email</h5>
                                        <a className='value' href='mailto:omkarkhairephotography@gmail.com'>omkarkhairephotography@gmail.com</a>
                                    </div>
                                    <div className='each-box'>
                                        <h5 className='label'>Phone Number</h5>
                                        <a className='value' href='tel:+919833084876'>+91 9833084876</a>
                                    </div>
                                </div>
                                <SocialMediaButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
