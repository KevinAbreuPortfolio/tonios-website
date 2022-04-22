import React from 'react'
import { AboutContainer,AboutLeft,AboutRight, HeadlineTag, SecondaryContainer,BigHeadlineTag, AboutInnerContainer } from './aboutElements'
import Restaurant from '../../../../assets/images/restaurant.jpg'

export const About = () => {
  return (
    <>
        <AboutContainer>
          <SecondaryContainer>
            <AboutLeft>
              <AboutInnerContainer>
                <HeadlineTag>ABOUT US</HeadlineTag>
                <BigHeadlineTag>We leave a delicious memory for you</BigHeadlineTag>
                <div> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </div>
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </AboutInnerContainer>
            </AboutLeft>

            <AboutRight>
                <a href='https://www.youtube.com/' className='abPicture' style={{backgroundImage:`url(${Restaurant})`}}>
                  
                </a>
            </AboutRight>
          </SecondaryContainer>
        </AboutContainer>
    
    </>
  )
}
