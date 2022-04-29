import React from 'react'
import { MenuContainer,ImageContainer,Slide} from './menuElements'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { Swiper,SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Menu1 from '../../../../assets/images/menu-01.jpg'
import Menu2 from '../../../../assets/images/menu-02.jpg'
import Menu3 from '../../../../assets/images/menu-03.jpg'
import Menu4 from '../../../../assets/images/menu-04.jpg'
import Menu5 from '../../../../assets/images/menu-05.jpg'
import Menu6 from '../../../../assets/images/menu-06.jpg'

export const Menu = () => {
    const imageArray = [
    Menu1,
    Menu2,
    Menu3,
    Menu4,
    Menu5,
    Menu6
  ];
  return (
    <>
    <MenuContainer>
      <ImageContainer
      className='swiper-container-unique'
        // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={5}
      slidesPerView={5}
      loop={true}
    //   autoplay={{ delay: 1000 }}
    //   navigation={true}
      navigation= {{
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique'
        }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      {imageArray.map((value, index) => {
        return <SwiperSlide key={index}><Slide style={{backgroundImage:`url(${value})`}} /></SwiperSlide>
      })}

        </ImageContainer>
        <div>
            <div className='swiper-button-next-unique'>1</div>
            <div className='swiper-button-next-unique'>2</div>
        </div>
    </MenuContainer>
    </>
  )
}

// export default Menu