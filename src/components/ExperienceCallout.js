import React from 'react'
import styled from 'styled-components'
import {Section} from './Section'
import img from '../assets/happy-driving-student.jpg'
import {BtnPrimary2} from './Buttons'

const Image = styled.img`
  height: 75vh;
  float: right;
  width: auto;
  @media screen and (orientation: portrait) {
    display: none;
  }
`
const Bg = styled.div`
  background: #f5f5f5;
  @media screen and (orientation: portrait) {
    background-size: cover;
    background-position: center;
    background-image: url(${img});
  }
`
const Container = styled(Section)`
  padding: calc(var(--pad) * 5) 0px;
  position: relative;
  @media screen and (orientation: portrait) {
    padding: 0;
    max-width: 100%;
    height: 100vh;
    border-top: 15px solid #f5f5f5;
    border-bottom: 15px solid #f5f5f5;
  }
`
const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const TextBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
  height: 50vh;
  width: 40vh;
  padding: calc(var(--pad) * 2);
  color: #000;
  font-weight: 500;
  line-height: 1.4;
  font-size: 1.3rem;
  @media screen and (orientation: portrait) {
    right: calc(var(--pad) * 2);
    left: initial;
  }
`
const TextBoxInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const ExperienceCallout = () => {
  return <Bg>
    <Container>
      <Inner>
        <Image
          src={img}
          alt={'young driving student woman leaning against car'} />
        <TextBox>
          <TextBoxInner>
            Thousands of nervous adults have put their trust in our proven training program. You will begin to feel confident after your first driving lesson.
            <BtnPrimary2
              as={'a'}
              style={{
                width: '100%',
                position: 'absolute',
                left: 0,
                bottom: 0
              }} 
              href="tel:612-623-4142">
              Call Today
            </BtnPrimary2>
          </TextBoxInner>
        </TextBox>
        {/* Clearfix */}
        <div style={{clear: 'both'}} />
      </Inner>
    </Container>
  </Bg>
}

export default ExperienceCallout