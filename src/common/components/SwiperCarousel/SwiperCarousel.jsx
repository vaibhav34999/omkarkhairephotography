import React from 'react';
import './swiper-carousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';


const SwiperCarousel = ({ items, type, perView }) => {
    return (
        <div className='swiper-card-box'>
            <Swiper
                grabCursor={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={perView}
                spaceBetween={30}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[Navigation]}
                className='swiper_container'
            >
                {items?.length ? items.map((item, index) => {

                    return (
                        <SwiperSlide key={index}>
                            {
                                type === "review" ?
                                    (<ReviewCard item={item} />) : ""
                            }
                        </SwiperSlide>
                    );
                }) : ""}
                <div className='slider-controler'>
                    <div className='swiper-button-prev slider-arrow'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div className='swiper-button-next slider-arrow'>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default SwiperCarousel


const ReviewCard = ({ item }) => {

    console.log("item", item);
    
    const date = new Date(item.time * 1000);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options).replace('.', '');

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={i <= rating ? solidStar : regularStar}
                    className='star-icon'
                />
            );
        }
        return stars;
    };
    
    return (
        <div className='review-card'>
            <div className='review-content'>
                <div className='profile-box'>
                    <img className='profile-img' src={item?.profile_photo_url} alt={`${item?.author_name}'s profile`} />
                </div>
                <div className='contain-box'>
                    <h6>{item?.author_name}</h6>
                    <h6>Submitted: {formattedDate}</h6>
                    <div className='star-rating'>
                        {renderStars(item.rating)}
                    </div>
                </div>
            </div>
            <div>
                <p>{item.text}</p>
            </div>
        </div>
    )
}
