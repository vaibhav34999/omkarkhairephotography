import React from 'react';
import "./home.scss";
import MainBanner from '../../components/MainBanner/MainBanner';
import Introduction from '../../components/Introduction';
import Faqs from '../../components/Faqs/Faqs';
import Reviews from '../../components/Reviews/Reviews';

const Home = () => {
  return (
    <div className='home-container'>
        <MainBanner/>
        <Introduction/>
        <Faqs/>
        <Reviews/>
    </div>
  )
}

export default Home
