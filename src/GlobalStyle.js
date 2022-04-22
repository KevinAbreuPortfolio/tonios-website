import { createGlobalStyle } from 'styled-components'

// Media Query Breakpoint Notes
// 20em is 320px
// 30em is 480px
// 48em is 768px
// 64em is 1024px
// 75em is 1200px
// 120em is 1920px

export const GlobalStyle = createGlobalStyle`
  :root {
    /* --sectionPadding: 8.5%; */
    /* --primary-color: hsla(354.1,44.5%,44.5%, 100%); */
    --primary-color: hsla(9.8,100%,64.1%,100%);
    --secondary-color: hsla(0,0%,16.5%,100%);
    /* --tertiary-color: hsla(38.3,100%,56.7%,100%); */
    /* --forth-color: hsla(231,16.4%,23.9%,100%); */
    /* --pill-border-radius: 99999px; */
    --side-padding: 6vw;
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