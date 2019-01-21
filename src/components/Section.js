import React, { Children } from 'react'
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
  @media only screen and (max-width: 800px) {
    padding: calc(var(--pad) * 1.5) var(--pad);
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