import React from 'react'
import {SectionText, SectionP} from './Section'

export default () => {
  return <SectionText
    id={'services'}
    heading={'Services'}
    className={'smaller'}>
    <SectionP>Midway Driving School has been the leader in Adult Behind the Wheel driver education for more than 40 years.</SectionP>
    <SectionP>Offering private lessons with free pickup service, our patient instructors have provided Behind the Wheel driver education and arranged Driver License Road tests for thousands of students from all over the world.</SectionP>
  </SectionText>
}