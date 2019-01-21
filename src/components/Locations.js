import React from 'react'
import {SectionText, SectionP} from './Section'

export default () => {
  return <SectionText
    heading={'Locations'}
    className={'smaller'}>
    <SectionP>Free pickup is available for most of the Twin City, Duluth and Rochester metro areas. If you have passed the Minnesota Instruction Permit (Knowledge Test) and you want to schedule an appointment, <a href={'tel:612-623-4142'}>call us at (612) 623-4142</a>. It takes just a minute to arrange a convenient time for your first driving lesson.</SectionP>
    <SectionP>Our experienced instructors have each trained hundreds of nervous adults. They are very helpful, and will quickly prepare you for your Minnesota License Road Test in our driving school training car.</SectionP>
  </SectionText>
}