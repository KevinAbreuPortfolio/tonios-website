import styled from 'styled-components'

export const TopContainer = styled.section`
width: 100%;
height: 100vh;
display: flex;
background-color: blue;
>div:first-child{
    flex: 35%
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

export const ImageContainer = styled.div`
background-color: yellow;
`