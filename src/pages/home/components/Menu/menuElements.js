import styled from 'styled-components'
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const MenuContainer = styled.section`
width: 100%;
height: 130vh;
background-color: red;
display: flex;
flex-direction: column;
/* flex-wrap: wrap; */
justify-content: space-around;
background-color: var(--tertiary-color);


`

export const ImageContainer = styled(Swiper)`
/* background-color: yellow; */
width: 100%;
height: 70vh;
`
export const CarouselWrapper = styled.div`
height: fit-content;
width: 100%;
padding: 0 2%;
>div:nth-child(2){
    height: 15vh;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
}
` 

export const HeadlineWrapper = styled.div`
width: 100%;
/* background-color: green; */
padding: 0 var(--side-padding);
`

export const SlideDesc = styled.div`
height: 50%;
width: 100%;
background-color: var(--primary-color);
position: absolute;
bottom: 0;
color: white;
padding: 5%;
>h1{
    font-size: var(--h1-size);
    font-weight: 700;
}
>p{
    font-size: var(--p-size);
    font-weight: 400;
}
`
export const SlidePrice = styled.div`
width: 25%;
aspect-ratio: 1 / 1;
background-color: var(--primary-color);
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: var(--h2-size);
font-weight: 700;
`

export const Slide = styled.div`
height: 100%;
width: 100%;
/* display: inline-block; */
/* flex-direction: column; */
background-position: center;
background-repeat:no-repeat;
background-size: cover;
>div:first-child{
    /* justify-self: start; */
}
>div:last-child{
    /* justify-self: end; */
}
`

export const HeadlineTag = styled.h4`
color: var(--primary-color);
display: flex;
align-items: center;
font-size: var(--h4-size);
column-gap: 10px;
letter-spacing: 2px;
font-weight: 500;
text-transform: uppercase;
::before{
    content:'';
    display: block;
    width: 30px;
    height: 1px;
    background-color: var(--primary-color);
}
`

export const BigHeadlineTag = styled.h1`
font-size: var(--h1-size);
font-weight: 900;
line-height: 130%;
text-transform: capitalize;
width: 70%;
height: fit-content;
/* background-color: green; */
color: var(--secondary-color);

`
export const HeadlineBody = styled.p`
font-size: var(--p-size);
`
