import React from 'react'
import styled from 'styled-components'

export const Section = styled.section`
  max-width: 1200px;
  padding: var(--pad);
  margin: 0 auto;
`

const SectionWithText = styled.section`
  max-width: 1200px;
  padding: calc(var(--pad) * 4) var(--pad);
  margin: 0 auto;
  &.smaller {
    max-width: 880px;
  }
  @media only screen and (max-width: 800px) {
    padding: calc(var(--pad) * 1.5) var(--pad);
  }
`
export const SectionP = styled.p`
  font-weight: 300;
  line-height: 1.5;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  @media only screen and (max-width: 800px) {
    font-weight: 400;
    font-size: 1.05rem;
    margin-bottom: 1.25rem;
  }
`
const Heading = styled.h1`
  font-size: 48px;
  padding-bottom: 5px;
  display: inline-block;
  color: var(--text-header);
  border-bottom: 8px solid var(--accent);
  margin-bottom: 50px;
  @media only screen and (max-width: 800px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

export const SectionText = ({heading, children, ...props}) => {
  return <SectionWithText {...props}>
    {heading && <Heading>{heading}</Heading>}
    {children}
  </SectionWithText>
}