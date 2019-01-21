import React from 'react'
import styled from 'styled-components'
import {SectionText} from './Section'
import { StaticQuery, Link, graphql } from 'gatsby'
import { BtnPrimary } from './Buttons'
import Articles from './Articles'

const Bg = styled.div`
  background-color: var(--body-bg-alt);
`
const Heading = styled.h2`
  font-size: 1.5rem;
  color: var(--text-header);
  margin-bottom: calc(var(--pad) * 2);
`

const RecentPosts = () => {
  return <Bg>
    <SectionText>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Heading>Recent Articles</Heading>
        <Link to={'/articles'} title={'Midway Driving School Articles'}><BtnPrimary as="span">See all articles</BtnPrimary></Link>
      </div>
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              limit: 3
              sort: { fields: [frontmatter___date], order: DESC }) {
              edges {
                node {
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                  }
                }
              }
            }
          }
        `}
        render={data => <Articles data={data} />} />
    </SectionText>
  </Bg>
}

export default RecentPosts