import React from 'react'
import {Section} from './Section'
import styled from 'styled-components'
import bg from '../assets/midway-driving-school-bg-driver.jpg'
import Fade from 'react-reveal/Fade'

const Container = styled.div`
  background-color: #222;
  color: #fff;
  height: calc(100vh - 220px);
  background-image: url("${bg}");
  background-size: cover;
  font-family: Roboto;
  font-weight: 700;
  font-size: 40px;
  @media only screen and (max-width: 900px) {
    height: 60vw;
    font-size: 1.5rem;
  }
`
const H2 = styled.h2`
  color: #fff;
  line-height: 1.2;
  position: absolute;
  top: 20%;
  max-width: 500px;
  left: 20px;
  font-size: 3.75rem;
  @media only screen and (max-width: 900px) {
    font-size: 2rem;
  }
`
const Down = styled.a`
  position: absolute;
  left: 20px;
  bottom: 30px;
  width: 20px;
  height: 20px;
  transform: rotate(135deg);
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
`
const Discount = styled.div`
  position: absolute;
  right: 20px;
  bottom: -10px;
  background-color: #302D2F;
  width: 300px;
  height: 300px;
  box-shadow: 2px 4px 10px rgba(0,0,0,.3);
  color: #fff;
  padding: 30px;
  display: flex; 
  flex-direction: column;
  h3 {
    font-weight: 700;
    color: #fff;
    font-size: 22px;
    margin: 0 auto 15px 0;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.3;
    margin: 0 auto auto 0;
    &:last-child {
      margin: auto auto 0 0;
      color: #626466;
    }
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default () => {
  const d = new Date()
  const month = months[d.getMonth()]
  return <Container>
    <Section style={{position: 'relative', height: '100%'}}>
      <H2>Training designed for nervous&nbsp;adults</H2>
      <Down href="#services" />
      <Discount>
        <h3>Special Discount!</h3>
        <p>{`Mention the ${month} web discount when you call for $25 off a 6 or 7½ hour package!`}</p>
        <p>{`Valid through the month of ${month} only.`}</p>
      </Discount>
    </Section>
  </Container>
}