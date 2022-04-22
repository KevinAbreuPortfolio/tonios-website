import styled from 'styled-components'
import breakpoint from '../../../../breakpoints'


export const NavContainer = styled.div`
position: sticky;
top: 0;
z-index: 100;
display: flex;
flex-direction:row ;
width: 100%;
height: 15vh;
min-height: 3.125em;
max-height: 12.5em;
background-color: ghostwhite;
padding-left: var(--side-padding);
padding-right: var(--side-padding);
>ul{
    flex:1;
    list-style:none;
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    text-decoration: none;
    column-gap:10%;
    align-items: center;
    justify-content: end;
    font-weight: 600;
}
>ul>li:first-child{
    color: var(--primary-color);
}
>ul>li{
    cursor: pointer;
}
>div{
    flex-direction: row;
    flex:1;
}


/* @media screen and (${breakpoint.device.bP1}){
    background-color: darkblue;
}
@media screen and (${breakpoint.device.bP2}){
    background-color: gold;
} */
/* @media screen and (${breakpoint.device.bP3}){
    background-color: green;
}
@media screen and (${breakpoint.device.bP4}){
    background-color: gray;
}
@media screen and (${breakpoint.device.bP5}){
    background-color: yellow;
}
@media screen and (${breakpoint.device.bP6}){
    background-color: darkred;
} */
`

export const LogoContainer = styled.div`
display: flex;
align-items: center;
background-image: url(${props => props.url});
>img{
    width: 35%;
    min-width: 188px;
}
`

export const NavLinks = styled.ul`
>li{
    white-space: nowrap;
}
`