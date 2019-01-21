import React from 'react'
import styled from 'styled-components'
import {Section} from './Section'
import Mailto from 'react-mailto.js'
import { Link } from 'gatsby'

const Container = styled.footer`
  background-color: var(--footer-bg);
  color: var(--footer-color);
  /* Declaring links here because <Link> is weird :) */
  a:link, a:visited, a:hover, a:active {
    color: #fff;
  }
  a:hover {
    text-decoration: underline;
  }
  a.accent:link, a.accent:visited, a.accent:hover, a.accent:active {
    color: var(--accent);
  }
  /* Used to obscure email name from scrapers */
  .m:after {
    content: attr(data-n) "@" attr(data-d) "." attr(data-t); 
  }
`
const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-right: calc(var(--pad) * 1.5);
  @media only screen and (max-width: 900px) {
    width: 70px;
    height: 70px;
    margin-right: calc(var(--pad) * .5);
  }
`
const Pad = styled.div`
  padding: var(--pad) 0;
`
const FlexToBlock = styled.div`
  display: flex;
  @media only screen and (max-width: 900px) {
    display: block;
  }
`
const Col1 = styled.div`
  flex: 2;
  @media only screen and (max-width: 900px) {
    margin-bottom: 1rem;
  }
`
const Col2 = styled.div`
  flex: 1;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const Col3 = styled.div`
  flex: 3;
  @media only screen and (max-width: 900px) {
    margin-bottom: 1rem;
  }
`
const SubColumns = styled.div`
  flex: 1;
  @media only screen and (max-width: 900px) {
    margin-bottom: 1rem;
  }
`
const Copyright = styled.p`
  margin-top: 6rem;
  flex: 1;
`
const Tagline = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.2;
  @media only screen and (max-width: 900px) {
    font-size: 1.2rem;
  }
`

export default ({}) => {
  return <Container>
    <Pad />
    <Section>
      <FlexToBlock style={{alignItems: 'flex-end'}}>
        <Col1>
          <Link to={'/'} title={'Midway Driving School Homepage'}>
            <Logo
              src={'/brand/footer-logo.png'}
              alt={'Midway Driving School'} />
          </Link>
          <a
            href={'https://dps.mn.gov/Pages/default.aspx'}
            target={'_blank'}>
            <Logo
              src={'/brand/mndot.png'}
              alt={'Minnesota Department of Transportation'} />
          </a>
        </Col1>
        <Col2 />
        <Col3>
          <Tagline>Serving the Saint&nbsp;Paul&nbsp;and&nbsp;Minneapolis,<br />MN metro area for over&nbsp;30&nbsp;years.</Tagline>
        </Col3>
      </FlexToBlock>
      <Pad />
      <FlexToBlock>
        <Col1>
          <p>This program is licensed by the <a
            className={'accent'}
            href={'https://dps.mn.gov/Pages/default.aspx'} 
            target={"_blank"}>Minnesota Department of Public Safety.</a></p>
          <p>We are listed on <a
            className={'accent'}
            href={'http://www.drivinglessonsschool.com/'} 
            target={"_blank"}>Recommended Driving Schools</a></p>
        </Col1>
        <Col2 />
        <Col3>
          <h2>Contact</h2>
          <FlexToBlock as={'ul'}>
            <SubColumns as={'li'}>Twin Cities<br /><a href="tel:612-623-4142">(612) 623-4142</a></SubColumns>
            <SubColumns as={'li'}>Duluth<br /><a href="tel:218-626-0123">(218) 626-0123</a></SubColumns>
            <SubColumns as={'li'}>Rochester<br /><a href="tel:507-289-3456">(507) 289-3456</a></SubColumns>
          </FlexToBlock>
          {/* TODO: Don't show email */}
          <p>Email<br />
            <Mailto
              className={'m'}
              data-n={'midwaydriving1'}
              data-d={'aol'}
              data-t={'com'}
              secure={true}
              to={['midwaydriving1@aol.com']}
              subject={'Contact Midway Driving School'} />
          </p>
          <Pad />
          <FlexToBlock>
            <SubColumns>
              <h2>Helpful Links</h2>
              <ul>
                <li>
                  <a
                    target={"_blank"}
                    href={"https://dps.mn.gov/divisions/dvs/forms-documents/Documents/Minnesota_Drivers_Manual.pdf"}>
                      Minnesota Driver Manual (PDF)
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    href={"https://dps.mn.gov/divisions/dvs/Pages/default.aspx"}>
                      Driver and Vehicle Services - MN
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    href={"https://dps.mn.gov/divisions/dvs/Pages/drivers-license-information.aspx"}>
                    Driver's License Information - MN
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    href={"https://dps.mn.gov/divisions/dvs/locations/Pages/find-office-locations.aspx"}>
                      Drivers's License Locations - MN
                  </a>
                </li>
              </ul>
            </SubColumns>
            <SubColumns>
              <h2>Follow Us</h2>
              <ul>
                <li>
                  <a
                    target={"_blank"}
                    href={"https://www.facebook.com/MidwayDrivingSchool/"}>
                      Facebook
                  </a>
                </li>
              </ul>
            </SubColumns>
          </FlexToBlock>
        </Col3>
      </FlexToBlock>
      <Copyright>Copyright ©{new Date().getFullYear()} Midway Driving School All Rights Reserved.</Copyright>
    </Section>
  </Container>
}