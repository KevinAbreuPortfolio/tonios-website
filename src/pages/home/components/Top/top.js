import React from 'react'
import { SideTitle, TopContainer, ImageContainer, Slide,SecondaryContainer } from './topElements'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import Slide1 from '../../../../assets/images/slide-01.jpg'
import Slide2 from '../../../../assets/images/slide-02.jpg'
import Slide3 from '../../../../assets/images/slide-03.jpg'
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export const Top = () => {
  const imageArray = [
    Slide1,
    Slide2,
    Slide3
  ];
  return (
    <>
      <TopContainer>
        <SecondaryContainer>

        <SideTitle>

        </SideTitle>
        <ImageContainer
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 1000 }}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      {imageArray.map((value, index) => {
        return <SwiperSlide key={index}><Slide style={{backgroundImage:`url(${value})`}} /></SwiperSlide>
      })}
      ...
    </ImageContainer>
      </SecondaryContainer>
      </TopContainer>

    {/* <TopContainer>
        <SideTitle/>
        <PictureCarousel>

        </PictureCarousel>
      </TopContainer>  */}
    </>
  )
}
