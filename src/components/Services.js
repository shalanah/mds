import React from 'react'
import {SectionText, SectionP} from './Section'
import styled from 'styled-components'
import icon_1 from '../assets/icon-training-designed-for-nervous-adults.png'
import icon_2 from '../assets/icon-private-lessons.png'
import icon_3 from '../assets/icon-free-pick-up-service.png'
import icon_4 from '../assets/icon-single-lessons-or-discount-packages.png'
import icon_5 from '../assets/icon-cars-available-for-mn-license-road-test.png'
import icon_6 from '../assets/icon-esl-experts.png'
import Fade from 'react-reveal/Fade'

const ServiceList = styled.ul`
  margin-top: 100px;
  overflow: hidden;
`
const ServiceImg = styled.img`
  height: 80px;
  width: auto;
  margin-bottom: 20px;
  display: inline-block;
`

const ServiceItem = styled.li`
  font-size: 20px;
  color: #555;
  float: left;
  font-weight: 700;
  text-align: center;
  width: 31%;
  height: 200px;
  margin-right: 2%;
  @media only screen and (max-width: 800px) {
    width: 48%;
    margin-right: 2%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-right: 0;
  }
`

const list = [
  {text: 'Training Designed for Nervous Adults', icon: icon_1},
  {text: 'Private Lessons', icon: icon_2},
  {text: 'Free Pickup Service', icon: icon_3},
  {text: 'Single Lessons or Discount Packages', icon: icon_4},
  {text: 'Cars Available for MN License Road Test', icon: icon_5},
  {text: 'ESL Experts', icon: icon_6}
]

export default () => {
  return <SectionText
    id={'services'}
    heading={'Services'}
    className={'smaller'}>
    <SectionP>Midway Driving School has been the leader in Adult Behind the Wheel driver education for over 40 years.</SectionP>
    <SectionP>Offering private lessons with free pickup service, our patient instructors have provided Behind the Wheel driver education and arranged Driver License Road tests for thousands of students from all over the world.</SectionP>
    <ServiceList>
      {list.map(({text, icon}, i) => {
        return <ServiceItem key={i} >
          <Fade
            bottom
            delay={i * 100}>
            <div>
              <ServiceImg src={icon} />
              <div>{text}</div>
            </div>
          </Fade>
        </ServiceItem>
      })}
    </ServiceList>
    <div style={{display: 'block', clear: 'both'}} />
  </SectionText>
}