import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCard from './SwiperCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import styles from './Swiper.module.css';

import { Navigation,Pagination } from 'swiper/modules';

const slides = [
  {
    title: 'Slide 1',
    location: 'Location 1',
    price: 'Price 1',
    desc:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    title: 'Slide 2',
    location: 'Location 2',
    price: 'Price 2',
    desc:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    title: 'Slide 3',
    location: 'Location 3',
    price: 'Price 3',
    desc:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    title: 'Slide 4',
    location: 'Location 4',
    price: 'Price 4',
    desc:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    title: 'Slide 5',
    location: 'Location 5',
    price: 'Price 5',
    desc:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    title: 'Slide 6',
    location: 'Location 6',
    price: 'Price 6',
    desc:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    title: 'Slide 7',
    location: 'Location 7',
    price: 'Price 7',
    desc:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    title: 'Slide 8',
    location: 'Location 8',
    price: 'Price 8',
    desc:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    title: 'Slide 9',
    location: 'Location 9',
    price: 'Price 9',
    desc:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    title: 'Slide 10',
    location: 'Location 10',
    price: 'Price 10',
    desc:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
   
];
  
export default function RSwiper() {
  return ( 
    <div className={styles.main}>  
     {/* <p>Featured Destinations </p> */}
      <Swiper   pagination={{dynamicBullets: true, }} navigation={false} modules={[Navigation,Pagination]} className={styles.swiper} slidesPerView={1} autoplay={{delay: 7000,disableOnInteraction: false,}} >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide className={styles.swiperslide} key={index}>
                <SwiperCard className={styles.swipercard} title={slide.title} price={slide.price} location={slide.location} text={slide.desc} />
             </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
