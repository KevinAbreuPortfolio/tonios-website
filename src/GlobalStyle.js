import { createGlobalStyle } from 'styled-components'
import breakpoint from './breakpoints'
// Media Query Breakpoint Notes
// 20em is 320px
// 30em is 480px
// 48em is 768px
// 64em is 1024px
// 75em is 1200px
// 120em is 1920px

// NOTE: PLEASE REMEMBER TO CREATE MEDIA QUERIES
// FROM SMALLEST/TOP SCREEN SIZE TO LARGEST/BOTTOM SCREEN SIZE 

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: hsla(9.8,100%,64.1%,100%);
    --secondary-color: hsla(0,0%,16.5%,100%);
    --side-padding: 6vw;
    --h1-size: 1.4rem;
    --h4-size: 0.5rem;
    --p-size: 0.4rem;
    --li-size: 0.5rem;
    @media screen and (${breakpoint.device.bP3}){
      --h1-size: 1.6rem;
      --h4-size: 0.7rem;
      --p-size: 0.6rem;
      --li-size: 0.7rem;
      }  
      @media screen and (${breakpoint.device.bP4}){
        --h1-size: 1.8rem;
        --h4-size: 0.9rem;
        --p-size: 0.7rem;
        --li-size: 0.9rem;
        }  
    @media screen and (${breakpoint.device.bP5}){
      --h1-size: 2rem;
      --h4-size: 1rem;
      --p-size: 0.9rem;
      --li-size: 1rem;
      }  
  }
    *{
      padding:0;
      margin: 0;
      border:0;
      outline:0;
      box-sizing: border-box;
      /* font-family: 'Dancing Script', cursive; */
      font-family: 'Poppins', sans-serif;
      font-weight: normal;
  }
 
`