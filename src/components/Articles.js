import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { Link } from 'gatsby'

const ArticleContainer = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between; 
  @media only screen and (max-width: 900px) {
    display: block;
  }
`
const Preview = styled.article`
  width: calc(33% - var(--pad));
  margin-bottom: calc(var(--pad) * 2);
  :nth-of-type(3n) {
    padding-right: 0;
  }
  @media only screen and (max-width: 900px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`
const Card = styled.div`
  @media only screen and (min-width: 900px) {
    border: 1px solid rgba(0,0,0,.1);
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
    padding: calc(var(--pad) * 2);
    height: 100%;
    transition: .2s;
    :hover {
      transform: scale(1.01);
      box-shadow: 0px 20px 150px rgba(0,0,0,.2);
    }
  }
`
const Title = styled.h3`
  font-size: 1.25rem;
  color: var(--text-header);
  a:link, a:visited, a:hover, a:active {
    color: var(--text-header);
  }
  a:hover {
    color: var(--accent-darker);
  }
`
const Summary = styled.p`
  font-size: .95rem;
`
const Tag = styled.div`
  display: inline-block;
  margin: 0 calc(var(--pad) * .25) calc(var(--pad) * .5) 0;
  a {
    display: inline;
    background-color: var(--text-mute);
    color: #fff;
    white-space: nowrap;
    font-size: .7rem;
    border-radius: 3px;
    padding: .2rem .5rem;
    transition: .2s;
  }
  a:hover {
    background-color: #444;
  }
`

const Articles = ({data}) => {
  const rows = data.allMarkdownRemark.edges.length / 3
  const lastRowStart = (rows - 1) * 3
  return <ArticleContainer>
    {data.allMarkdownRemark.edges.map(({
      node: {
        frontmatter: {title, tags},
        excerpt,
        fields: {slug}
      }
    }, i) => {
      return <Preview key={i} style={{marginBottom: i >= lastRowStart ? 0 : ''}}>
        <Card>
          <Title>
            <Link
              to={slug}
              title={`Midway Driving School - Article - ${title}`}>
              {title}
            </Link>
          </Title>
          <Summary dangerouslySetInnerHTML={{ __html: excerpt }} />
          {tags.map((tag, j) => {
            return <Tag key={`${i}-${j}`}>
              <Link
                to={`/tags/${kebabCase(tag)}`}
                title={`Midway Driving School - Tags - ${tag}`}>
                {tag}
              </Link>
            </Tag>
          })}
        </Card>
      </Preview>
      })
    }
    {/* Placeholders so that article nums with remainders look ok */}
    {Array.from({ length: (data.allMarkdownRemark.edges.length) % 3 }).map((a, i) => {
      return <Preview key={`filler-${i}`} style={{marginBottom: 0}} />
    })}
  </ArticleContainer>
}

export default Articles