import styled from 'styled-components'


export const AboutContainer= styled.section`
width: 100%;
height: 110vh;
/* background-color: yellow; */
padding: 0 var(--side-padding);
`
export const SecondaryContainer = styled.div `
/* width: inherit; */
height: inherit;
display: flex;
margin: 0 auto;
>div{
    flex: 1;
}
>div:first-child{
    /* background-color: green; */
}
>div:last-child{
    /* background-color: darkgreen; */
}

`

export const AboutLeft = styled.div`
display: flex;
justify-content: start;
align-items: center;
`

export const AboutInnerContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 90%;
aspect-ratio: 1 / 1;
/* background-color: red; */


`
export const AboutRight = styled.div`
display: flex;
justify-content: end;
align-items: center;
>a.abPicture{
    width: 90%;
    aspect-ratio: 1 / 1;

    /* >a{
        display: inline-block;
        cursor: pointer;
        width: 100%;
        height: 100%;
    } */
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

export const AboutFood = styled.div`
width: 100%;
height: 30%;
/* background-color: blue; */
display: flex;
column-gap: 5%;
>div{
    flex:1;
    /* background-color: green; */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
`
