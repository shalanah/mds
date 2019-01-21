import React from 'react'
import { graphql } from 'gatsby'
import Articles from '../components/Articles'
import {SectionText} from '../components/Section'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class Blog extends React.Component {
  render() {
    const title = ""
    const keywords = []
    return (
      <Layout>
        <SEO
          title={title}
          keywords={keywords} />
          <div style={{background: 'linear-gradient(var(--body-bg-alt), var(--body-bg))'}}>
            <SectionText heading={'Articles'}>
              <Articles data={this.props.data} />
            </SectionText>
          </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
`
