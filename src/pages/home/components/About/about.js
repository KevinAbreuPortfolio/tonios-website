import React from 'react'
import { AboutContainer,AboutLeft,AboutRight, HeadlineTag, SecondaryContainer,BigHeadlineTag, AboutInnerContainer, HeadlineBody, AboutFood } from './aboutElements'
import Restaurant from '../../../../assets/images/restaurant.jpg'
import Food1 from '../../../../assets/images/food-01.jpg'
import Food2 from '../../../../assets/images/food-02.jpg'
import Food3 from '../../../../assets/images/food-03.jpg'

export const About = () => {
  const imageArray = [
    Food1,
    Food2,
    Food3
  ];
  return (
    <>
        <AboutContainer>
          <SecondaryContainer>
            <AboutLeft>
              <AboutInnerContainer>
                <HeadlineTag>ABOUT US</HeadlineTag>
                <BigHeadlineTag>We leave a delicious memory for you</BigHeadlineTag>
                <HeadlineBody> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget. Dictum at tempor commodo ullamcorper. Rutrum tellus pellentesque eu tincidunt. Duis ut diam quam nulla porttitor massa. Ornare aenean euismod elementum nisi quis eleifend quam.<br/><br/>Imperdiet sed euismod nisi porta lorem mollis aliquam. Velit dignissim sodales ut eu. Consectetur a erat nam at. In massa tempor nec feugiat nisl pretium fusce id
                </HeadlineBody>
                <AboutFood>
                  {imageArray.map((value, index) => {
                  return <div key={index} style={{backgroundImage:`url(${value})`}} />
                    })}
                </AboutFood>
                
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
