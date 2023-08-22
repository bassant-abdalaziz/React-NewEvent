
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useMediaQuery } from 'react-responsive'; 

import CreativeSpeakers from './CreativeSpeakers';
import speakersData from '../../Modal/speakersData';

const Slider = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 }); 
  const isTablet = useMediaQuery({ maxWidth: 900 }); 

  let slidesPerView;

  if(isMobile){
    slidesPerView = 1
  }
  else if (isTablet) {
    slidesPerView =2
  } 
  
  else{
    slidesPerView =4
  }
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={slidesPerView}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {speakersData.map((item) => {
        return (
          <SwiperSlide key={item.id} className='slide'>
            <CreativeSpeakers img={item.img} name={item.name} job={item.job} alt={item.alt} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;




