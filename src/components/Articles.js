import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { Link, navigate } from 'gatsby'

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 0; 
  @media only screen and (max-width: 900px) {
    display: block;
  }
`
const Preview = styled.article`
  cursor: pointer;
  width: calc(33% - var(--pad));
  margin-bottom: calc(var(--pad) * 2);
  :nth-of-type(3n) {
    padding-right: 0;
  }
  @media only screen and (min-width: 901px) {
    .desktop-last-row {
      margin-bottom: 0
    }
  }
  @media only screen and (max-width: 900px) {
    margin-bottom: 2rem;
    width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
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
      box-shadow: 0px 20px 75px rgba(0,0,0,.05);
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
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`
const Tag = styled.div`
  display: inline-block;
  margin: 0 calc(var(--pad) * .25) calc(var(--pad) * .7) 0;
  a {
    display: inline;
    background-color: var(--accent);
    color: #fff;
    white-space: nowrap;
    font-size: .8rem;
    border-radius: 3px;
    padding: .3rem .5rem;
    transition: .2s;
  }
  a:hover {
    background-color: #000;
  }
`

const Articles = ({data, history}) => {
  const rows = data.allMarkdownRemark.edges.length / 3
  const lastRowStart = (rows - 1) * 3
  const len = data.allMarkdownRemark.edges.length
  return <ArticleContainer>
    {data.allMarkdownRemark.edges.map(({
      node: {
        frontmatter: {title, tags},
        excerpt,
        fields: {slug}
      }
    }, i) => {
      return <Preview
        onClick={() => navigate(slug)}
        key={i}
        className={i >= lastRowStart ? 'desktop-last-row' : ''}>
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