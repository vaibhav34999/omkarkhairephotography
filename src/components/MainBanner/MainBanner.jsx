// MainBanner.jsx
import React from 'react';
import './main-banner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { SWIPER_IMAGES } from '../../constants/constants';

const MainBanner = () => {
  return (
    <div className='main-banner'>
      <div className='container'>
        <div className='introduce-box'>
          <div className='name-box'>
            <h6 className='photography-text'>Stunning Photography by</h6>
            <h1 className='name-text'>OMKAR KHAIRE</h1>
          </div>
          <div className='work-box'>
            <div className='btn-box'>
              <h5 className='lets-text'>Let’s</h5>
              <button className='work-btn'>
                <img src='content/dam/images/icon/arrow-icon.svg' alt='arrow' />
              </button>
            </div>
            <h5 className='together-text'>Work Together</h5>
          </div>
        </div>
        {/* <div className='swiper-card-box'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
            slidesPerView={'3'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper_container'
          >
            {SWIPER_IMAGES.map((image, index) => (
              <SwiperSlide key={index}>
                <img className='img' src={image} alt={`slide_image_${index}`} />
              </SwiperSlide>
            ))}
            <div className='slider-controler'>
              <div className='swiper-button-prev slider-arrow'></div>
              <div className='swiper-button-next slider-arrow'></div>
              <div className='swiper-pagination'></div>
            </div>
          </Swiper>
        </div> */}

        <div className='serive-banner-container'>
        <div class="users-color-container">
            <span class="item"></span>
            <img
              class="item"
              src="/content/dam/images/five.jpg"

              alt="" />
            {/* <span class="item"></span> */}
            <img
              class="item"
              src="/content/dam/images/one.jpg"

              alt="" />
            <img
              class="item"
              src="/content/dam/images/six.jpg"

              alt="" />

            <img
              class="item"
              src="/content/dam/images/six.jpg"

              alt="" />
            <span class="item" ></span>
            <img class="item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5eb50f89-3e5a-480e-860c-8d40d3ba9ffe" alt="" />
            <span class="item"></span>

            <span class="item"></span>
            <img class="item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/86c71a79-2efe-4567-8665-b1e5a1fd9735" alt="" />
            <span class="item"></span>
            <img class="item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/97ef9643-5202-41aa-80f0-ceeabccdd099" alt="" />
          </div>
          <div class="users-color-container">
            <span class="item"></span>
            <img
              class="item"
              src="/content/dam/images/five.jpg"

              alt="" />
            <span class="item"></span>
            <img
              class="item"
              src="/content/dam/images/six.jpg"

              alt="" />

            <img
              class="item"
              src="/content/dam/images/six.jpg"

              alt="" />
            <span class="item" ></span>
            <img class="item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5eb50f89-3e5a-480e-860c-8d40d3ba9ffe" alt="" />
            <span class="item"></span>

            <span class="item"></span>
            <img class="item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/86c71a79-2efe-4567-8665-b1e5a1fd9735" alt="" />
            <span class="item"></span>
            <img class="item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/97ef9643-5202-41aa-80f0-ceeabccdd099" alt="" />
          </div>
        </div>



      </div>
    </div>
  );
};

export default MainBanner;
