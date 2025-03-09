import React, { useEffect, useState } from 'react';
import './reviews.scss';
import { getPlaceId, getPlaceReviews } from '../../api/googleReview';
import SwiperCarousel from '../../common/components/SwiperCarousel';
import Button from '../../common/components/Button';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  const storeName = 'OmkarKhairePhotography';
  const latitude = 19.0448224;
  const longitude = 72.872502;

  const getReviewsData = async () => {
    try {
      const placeId = await getPlaceId(storeName, latitude, longitude);
      const reviewsData = await getPlaceReviews(placeId);
      if (reviewsData.length) {
        console.log("reviewsData", reviewsData);
        setReviews(reviewsData);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getReviewsData();
  }, [storeName, latitude, longitude]);

  const REVIEWS_DATA = reviews || [];

  return (
    <div className='review-container'>
      <div className='container'>
        <div className='title-box'>
          <div className='client-box'>
            <h6 className='test-text'>Testimonials</h6>
            <h2 className='client-text'>What My Clients Say</h2>
          </div>
          <div className='total-review-box'>
            <div className='total-box'>
              <h6 className='total-text'>Total Reviews</h6>
              <h5 className='total-length-text'>{REVIEWS_DATA?.length}</h5>
            </div>
            <div>
              <Button btnText={"View All Testimonials"}/>
            </div>
          </div>
        </div>
        <SwiperCarousel items={REVIEWS_DATA} type="review" perView={3}/>

      </div>
    </div>
  );
};

export default Reviews;
