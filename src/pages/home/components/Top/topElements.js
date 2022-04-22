import styled from 'styled-components'
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const TopContainer = styled.section`
width: 100%;
height: 100vh;
background-color: wheat;

`
export const SecondaryContainer = styled.div`
width: inherit;
height: inherit;
display: flex;
background-color: blue;
>div:first-child{
    flex: 35%;
    padding-left: var(--side-padding);
}
>div:last-child{
    flex: 65%;
}

`

export const SideTitle = styled.div`
background-color: var(--primary-color);
/* width:35%;
height: 100%; */
`

export const ImageContainer = styled(Swiper)`
background-color: yellow;
`

export const Slide = styled.div`
height: inherit;
width: inherit;
background-position: center;
background-repeat:no-repeat;
background-size: cover;

`