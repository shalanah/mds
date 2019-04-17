import React from 'react'
import styled from 'styled-components'
import {Section} from './Section'
import {Link} from 'gatsby'

const Container = styled(Section)`
  height: 190px;
  @media only screen and (max-width: 900px) {
    height: 100px;
  }
`

const LogoContainer = styled.div`
  font-size: 0;
  line-height: 0;
  left: 0;
  width: 104px;
  height: 69px;
  @media only screen and (max-width: 900px) {
    width: 69px;
    height: 46px;
  }
`

const Nav = styled.nav`
  margin: auto 0 auto auto;
  font-size: 1.125rem;
  font-family: Roboto;
  font-weight: 700;
  right: 0;
  ul li {
    float: left;
    margin-right: 5px;
    padding: 0px 15px;
    transition: .17s;
  }
  ul li:last-of-type {
    margin-right: 0;
    padding-right: 0;
  }
`
const NavLink = styled.a`
  padding: 9px 0;
  cursor: pointer;
  position: relative;
  color: var(--link-alt); 
  :after {
    content: '';
    transition: .15s;
    height: 4px;
    width: 0;
    background-color: var(--accent);
    left: 50%;
    bottom: -3px;
    transform: translateX(-50%);
    position: absolute;
  }
  :hover:after {
    width: 100%;
  }
`

const Phone = styled(NavLink)`
  white-space: no-wrap;
  color: #fff;
  transition: .2s;
  background-color: var(--accent-dark);
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  :hover {
    color: #fff;
    background-color: var(--accent-darker);
    box-shadow: 0px 1px 5px rgba(0,0,0,.3);
  }
  :hover:after {
    display: none;
  }
`

export default ({}) => {
  return <Container as={'header'}>
    <div className={'pos-full'} style={{position: 'relative'}}>
      <LogoContainer className={'pos-center-vert'}>
        <Link
          className={'pos-full'}
          to={'/'}
          title={'Midway Driving School Homepage'}>
          <img
            className={'pos-full'}
            src={'/brand/midway-driving-school-logo.png'}
            alt={'Midway Driving School'} />
        </Link>
      </LogoContainer>
      <Nav className={"mobile pos-center-vert"}>
        <ul>
          <li><Phone href="tel:612-623-4142">Call (612) 623-4142</Phone></li>
        </ul>
      </Nav>
      <Nav className={"mobile-none pos-center-vert"}>
        <ul>
          <li>
            <NavLink href="/#services">Services</NavLink>
          </li>
          <li>
            <NavLink href="/#locations">Locations, Rates, and Hours</NavLink>
          </li>
          <li>
            <NavLink href="/#faq">FAQ</NavLink>
          </li>
          {/*<li><a href="/blog">Driving Tips</a></li>*/}
          <li>
            <Phone href="tel:612-623-4142">Call (612) 623-4142</Phone>
          </li>
        </ul>
      </Nav>
    </div>
  </Container>
}