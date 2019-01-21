import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import {SectionText} from '../components/Section'
import kebabCase from 'lodash/kebabCase'
import {BtnPrimary} from '../components/Buttons'

class Tags extends React.Component {
  render () {
    const title = ""
    const keywords = []
    return (
      <Layout
        title={title}>
        <SEO
          title={title}
          keywords={keywords} />
          <div style={{background: 'linear-gradient(var(--body-bg-alt), var(--body-bg))'}}>
            <SectionText heading={'Tags'}>
              <div>
              {this.props.data.allMarkdownRemark.group.map((tag, i) => (
                <span style={{margin: '.2rem .2rem', display: 'inline-block'}}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} key={i}>
                    <BtnPrimary as={'span'}>{tag.fieldValue} ({tag.totalCount})</BtnPrimary>
                  </Link>
                </span>
              ))}
              </div>
            </SectionText>
          </div>            
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default Tags
