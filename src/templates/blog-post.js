import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import {SectionText} from '../components/Section'
import styled from 'styled-components'
import {BtnPrimary} from '../components/Buttons'

// Putting all styles here so markdown will automatically get them
const Container = styled.div`
  h2, h3 {
    font-weight: 700;
    line-height: 1.2;
  }
  a {
    color: var(--accent-dark);
    transition: .2s;
  }
  a:hover {
    color: var(--accent-darker);
    text-decoration: underline;
  }
  h2 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    @media only screen and (max-width: 800px) {
      font-size: 1.75rem;
    }
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    @media only screen and (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
  p, li {
    font-size: 1.7rem;
    font-weight: 300;
    line-height: 1.7;
    margin-bottom: 3rem;
    @media only screen and (max-width: 800px) {
      font-size: 1.2rem;
    }
  }
  ul {margin-bottom: 3rem; list-style-type: square;}
  li {margin-bottom: .25rem; margin-left: 1.5rem;}
`
const H1 = styled.h1`
  font-weight: 700;
  color: var(--text-header);
  line-height: 1.1;
  font-size: 3.8rem;
  width: 80%;
  text-shadow: 1px 1px 0px rgba(0,0,0,.2);
  color: #fff;
  @media only screen and (max-width: 800px) {
    font-size: 2rem;
    width: 100%;
  }
`
const Date = styled.p`
  color: #fff;
  text-shadow: 1px 1px 0px rgba(0,0,0,.2);
`
const Heading = styled.div`
  min-height: 20vw;
  background-color: #434A56;
  background-size: cover;
  background-image: url(/brand/road-juan-cardenas-1185096-unsplash.jpg);
  @media only screen and (max-width: 800px) {
    min-height: 10vw;
  }
`


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    return (
      <Layout
        location={this.props.location}
        title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt} />
          <Heading>
            <SectionText>
              <H1>{post.frontmatter.title}</H1>
              <Date>{post.frontmatter.date}</Date>
            </SectionText>
          </Heading>
          <Container>
          <SectionText>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <p><strong>Be safe, be confident and happy driving!</strong><br />
          -Midway Driving School<br />
          <em>“Training designed for nervous adults”</em></p>
            <div style={{display: 'block', overflow: 'auto'}}>
            {previous && (
              <Link style={{float: 'left'}} to={previous.fields.slug} rel="prev">
              <BtnPrimary as={'span'}>
                ← Previous article
                </BtnPrimary>
              </Link>
            )}
            {next && (
              <Link style={{float: 'right'}}  to={next.fields.slug} rel="next"><BtnPrimary as={'span'}>
                Next article →</BtnPrimary>
              </Link>
            )}
            </div>
          </SectionText>
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
