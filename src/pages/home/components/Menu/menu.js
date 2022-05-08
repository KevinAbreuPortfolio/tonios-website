import React from 'react'
import { MenuContainer,ImageContainer,Slide, SlideDesc, SlidePrice, CarouselWrapper, HeadlineTag, BigHeadlineTag, HeadlineWrapper} from './menuElements'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { size } from '../../../../breakpoints'

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
  const descArray = [
    {
      title: "Salad",
      desc: "Made with the finest Salads in the world",
      img: Menu1,
      price: "$15"
    },
    {
      title: "Meat",
      desc: "Made with the finest meat? (What?)",
      img: Menu2,
      price: "$16"
    },
    {
      title: "Chicken",
      desc: "Made with the finest chicken in the farm",
      img: Menu3,
      price: "$17"
    },
    {
      title: "Chicken Meat",
      desc: "Made with the finest artificially made Cow Chicken",
      img: Menu4,
      price: "$18"
    },
    {
      title: "Meat Chicken",
      desc: "Made with the finest Chicken Cow",
      img: Menu5,
      price: "$19"
    },
    {
      title: "Chicken Salad",
      desc: "Made with the finest Chicken and Iceberg Lettuce",
      img: Menu6,
      price: "$20"
    },

  ]
  return (
    <>
    <MenuContainer>
      <HeadlineWrapper>
        <HeadlineTag>Our Menu</HeadlineTag>
        <BigHeadlineTag>
          Our Selection of food with quality taste
        </BigHeadlineTag>
      </HeadlineWrapper>
      

      <CarouselWrapper>
      <ImageContainer
      id='swiper-container-unique'
        // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      breakpoints= {{
        [`${size.bP3}`]: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        //bP4 and beyond
        [`${size.bP4}`]: {
            slidesPerView: 5,
            spaceBetween: 10
        },
    }}
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
        return <SwiperSlide key={index}>
        <Slide style={{backgroundImage:`url(${value})`}}>

          <SlidePrice>
            {descArray[index]["price"]}
          </SlidePrice>

          <SlideDesc>
          <h1>{descArray[index]["title"]}</h1>
          <p>{descArray[index]["desc"]}</p>
          </SlideDesc>

        </Slide>
        </SwiperSlide>
      })}

        </ImageContainer>
        <div>
            <div className='swiper-button-prev-unique'>1</div>
            <div className='swiper-button-next-unique'>2</div>
        </div>
        </CarouselWrapper>
    </MenuContainer>
    </>
  )
}

// export default Menu