import React, {useState, useEffect, Fragment} from 'react'
import ReactDOM from 'react-dom'
import { SectionText, SectionP } from './Section'
import styled from 'styled-components'
import LocationModal from './LocationModal'
import {TweenMax} from 'gsap/TweenMax'
import {Transition} from 'react-transition-group'

const Link = styled.a`
  cursor: pointer;
  color: #36a6f7;
  text-decoration: underline !important;
  transition: .2s;
  :hover {
    color: #1c8bdb;
  }
`
const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,.7);
  width: 100%;
  height: 100%;
`
const LocationLink = styled.li`
  cursor: pointer;
  color: #36a6f7;
  position: relative;
  padding-bottom: 2px;
  font-weight: 300;
  font-size: 22px;
  transition: .2s;
  :hover {
    color: #555;
    font-weight: 700;
  }
`
const Header = styled(SectionP)`
  margin-bottom: 2rem;
  font-weight: 700;
  color: #000;
`

const Columns = styled.div`
  columns: 4;
  @media only screen and (max-width: 900px ) {
    columns: 3;
  }
  @media only screen and (max-width: 750px ) {
    columns: 2;
  }
  @media only screen and (max-width: 600px ) {
    columns: 1;
  }
`

const places = [
  { type: 'main', name: 'Andover' },
  { type: 'main', name: 'Anoka' },
  { type: 'outter', name: 'Apple Valley' },
  { type: 'main', name: 'Blaine' },
  { type: 'main', name: 'Bloomington' },
  { type: 'main', name: 'Brooklyn Center' },
  { type: 'outter', name: 'Burnsville' },
  { type: 'main', name: 'Champlin' },
  { type: 'main', name: 'Columbia Heights' },
  { type: 'main', name: 'Coon Rapids' },
  { type: 'outter', name: 'Cottage Grove' },
  { type: 'main', name: 'Crystal' },
  { type: 'main', name: 'Dayton' },
  { type: 'main', name: 'Duluth' },
  { type: 'main', name: 'Eagan' },
  { type: 'outter', name: 'Eden Prairie' },
  { type: 'main', name: 'Edina' },
  { type: 'outter', name: 'Excelsior' },
  { type: 'main', name: 'Hopkins' },
  { type: 'main', name: 'Fridley' },
  { type: 'main', name: 'Golden Valley' },
  { type: 'main', name: 'Inver Grove Heights' },
  { type: 'main', name: 'Maple Grove' },
  { type: 'main', name: 'Maplewood' },
  { type: 'main', name: 'Minneapolis' },
  { type: 'outter', name: 'Minnetonka' },
  { type: 'main', name: 'Moundsview' },
  { type: 'main', name: 'New Brighton' },
  { type: 'main', name: 'New Hope' },
  { type: 'outter', name: 'North Oaks' },
  { type: 'main', name: 'Oakdale' },
  { type: 'main', name: 'Osseo' },
  { type: 'main', name: 'Plymouth' },
  { type: 'outter', name: 'Prior Lake' },
  { type: 'main', name: 'Richfield' },
  { type: 'main', name: 'Robbinsdale' },
  { type: 'main', name: 'Rochester' },
  { type: 'outter', name: 'Rogers' },
  { type: 'outter', name: 'Rosemount' },
  { type: 'main', name: 'Roseville' },
  { type: 'outter', name: 'Savage' },
  { type: 'outter', name: 'Shakopee' },
  { type: 'main', name: 'Shoreview' },
  { type: 'main', name: 'Spring Lake Park' },
  { type: 'main', name: 'South St Paul' },
  { type: 'main', name: 'St Anthony' },
  { type: 'main', name: 'St Louis Park' },
  { type: 'main', name: 'St Paul' },
  { type: 'outter', name: 'Vadnais Heights' },
  { type: 'outter', name: 'Wayzata' },
  { type: 'main', name: 'West St Paul' },
  { type: 'outter', name: 'White Bear Lake' },
  { type: 'outter', name: 'Woodbury' }
]

const init = {show: false, location: null, type: null}

export default () => {
  const [{show, location, type}, setShowModal] = useState(init)
  const escModal = (e) => {
    if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
      setShowModal(init)
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', escModal)
    return () => {
      window.removeEventListener('keydown', escModal)
    }
  }, [])
  return (
    <SectionText
      id={'locations'}
      heading={'Locations'}
      className={'smaller'}>
      <SectionP>
        Free pickup is available for most of the Twin City, Duluth and Rochester
        metro areas. If you have passed the Minnesota Instruction Permit
        (Knowledge Test) and you want to schedule an appointment,{' '}
        <Link href={'tel:612-623-4142'}>call us at (612) 623-4142</Link>. It takes
        just a minute to arrange a convenient time for your first driving
        lesson.
      </SectionP>
      <SectionP>
        Our experienced instructors have each trained hundreds of nervous
        adults. They are very helpful, and will quickly prepare you for your
        Minnesota License Road Test in our driving school training car.
      </SectionP>
      <Header as={'h3'}>Click on your city for rates and hours</Header>
      <Columns>
        <ul>
          {places.map(({name, type}, i) => {
            return <LocationLink
              onClick={() => setShowModal({show: true, location: name, type})}
              key={i}>
              {name}
            </LocationLink>}) }
        </ul>
      </Columns>
      {ReactDOM.createPortal(<div>
        <Transition
          in={show}
          appear
          mountOnEnter
          unmountOnExit
          addEndListener={(node, done) => {
          TweenMax.fromTo( // eslint-disable-line
            node,
            .1,
            {
              opacity: show ? 0 : 1
            }, {
              opacity: show ? 1 : 0,
              onComplete: function () {
                done()
              }
            }
          )}}>
          <Overlay onClick={() => setShowModal(init)} />
        </Transition>
        <Transition
          in={show}
          appear
          mountOnEnter
          unmountOnExit
          addEndListener={(node, done) => {
            TweenMax.fromTo( // eslint-disable-line
              node,
              .1,
              {
                opacity: show ? 0 : 1,
                scale: show ? .93 : 1
              }, {
                opacity: show ? 1 : 0,
                scale: show ? 1 : .93,
                onComplete: function () {
                  done()
                }
              }
            )}}>
          <LocationModal type={type} onClose={() => setShowModal(init)} name={location} />
        </Transition>
      </div> , document.body)}
    </SectionText>
  )
}
