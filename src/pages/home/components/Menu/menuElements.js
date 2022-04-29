import styled from 'styled-components'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const MenuContainer = styled.section`
width: 100%;
height: 100vh;
background-color: red;
display: flex;
flex-direction: column;
flex-wrap: wrap;
>div:nth-child(2){
    height: 20vh;
    background-color: green;
    display: flex;
    align-items: center;
}
`

export const ImageContainer = styled(Swiper)`
background-color: yellow;
width: 100%;
height: 50vh;
`

// export const ImageContainer = styled(Swiper).attrs(
//     {'.swiper-container-unique': {
//   navigation: {
//     nextEl: '.swiper-button-next-unique',
//     prevEl: '.swiper-button-prev-unique'
//   }
// }}
// )`
// background-color: yellow;
// width: 100%;
// height: 20vh;
// `

// const carousel = new Swiper('.swiper-container', {
//   navigation: {
//     nextEl: '.swiper-button-next-unique',
//     prevEl: '.swiper-button-prev-unique'
//   }
// });

// export const ImageContainer = styled(Carousel)`
// background-color: green;
// width: 100%;
// height: 20vh;
// `

export const Slide = styled.div`
height: inherit;
width: inherit;
background-position: center;
background-repeat:no-repeat;
background-size: cover;
`
