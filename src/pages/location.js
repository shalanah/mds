import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import SEO from '../components/seo'
import Content from '../components/Location'
import { graphql } from 'gatsby'

const getUrlParameter = (name, search) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  const results = regex.exec(search)
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

export const places = [
  { type: 'main', name: 'Andover' },
  { type: 'main', name: 'Anoka' },
  { type: 'outer', name: 'Apple Valley' },
  { type: 'main', name: 'Blaine' },
  { type: 'main', name: 'Bloomington' },
  { type: 'main', name: 'Brooklyn Center' },
  { type: 'main', name: 'Brooklyn Park' },
  { type: 'outer', name: 'Burnsville' },
  { type: 'main', name: 'Champlin' },
  { type: 'main', name: 'Columbia Heights' },
  { type: 'main', name: 'Coon Rapids' },
  { type: 'outer', name: 'Cottage Grove' },
  { type: 'main', name: 'Crystal' },
  { type: 'main', name: 'Dayton' },
  { type: 'main', name: 'Duluth' },
  { type: 'main', name: 'Eagan' },
  { type: 'outer', name: 'Eden Prairie' },
  { type: 'main', name: 'Edina' },
  { type: 'outer', name: 'Excelsior' },
  { type: 'main', name: 'Hopkins' },
  { type: 'main', name: 'Fridley' },
  { type: 'main', name: 'Golden Valley' },
  { type: 'main', name: 'Inver Grove Heights' },
  { type: 'main', name: 'Maple Grove' },
  { type: 'main', name: 'Maplewood' },
  { type: 'main', name: 'Minneapolis' },
  { type: 'outer', name: 'Minnetonka' },
  { type: 'main', name: 'Moundsview' },
  { type: 'main', name: 'New Brighton' },
  { type: 'main', name: 'New Hope' },
  { type: 'outer', name: 'North Oaks' },
  { type: 'main', name: 'Oakdale' },
  { type: 'main', name: 'Osseo' },
  { type: 'main', name: 'Plymouth' },
  { type: 'outer', name: 'Prior Lake' },
  { type: 'main', name: 'Richfield' },
  { type: 'main', name: 'Robbinsdale' },
  { type: 'main', name: 'Rochester' },
  { type: 'outer', name: 'Rogers' },
  { type: 'outer', name: 'Rosemount' },
  { type: 'main', name: 'Roseville' },
  { type: 'outer', name: 'Savage' },
  { type: 'outer', name: 'Shakopee' },
  { type: 'main', name: 'Shoreview' },
  { type: 'main', name: 'Spring Lake Park' },
  { type: 'main', name: 'South St Paul' },
  { type: 'main', name: 'St Anthony' },
  { type: 'main', name: 'St Louis Park' },
  { type: 'main', name: 'St Paul' },
  { type: 'outer', name: 'Vadnais Heights' },
  { type: 'outer', name: 'Wayzata' },
  { type: 'main', name: 'West St Paul' },
  { type: 'outer', name: 'White Bear Lake' },
  { type: 'outer', name: 'Woodbury' }
]

const Location = ({
  data: {
    site: {
      siteMetadata: { title, keywords }
    },
    file
  },
  location
}) => {
  const locale = getUrlParameter('location', location.search) || ''
  const { type } = places.find(({ name }) => name === locale) || {}
  useEffect(() => {
    if (!type) {
      window.location = '/'
    }
  }, [type])
  if (!type) return null

  return (
    <Layout>
      <SEO title={title} keywords={keywords} />
      <Heading
        shorter
        title={
          <>
            {locale}
            <br />
            Rates + Hours
          </>
        }
        fluid={file.childImageSharp.fluid}
      />
      <Content type={type} />
      <div style={{ clear: 'both', marginBottom: '4rem' }} />
    </Layout>
  )
}

export default Location

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        keywords
      }
    }
    file(relativePath: { eq: "map.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
