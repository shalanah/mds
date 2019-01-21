import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

// WHAT IS A STATIC QUERY??? 
class Home extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const title = "Midway Driving School - ESL_Nervous Adult and Home School Behind the Wheel Driving Lessons Serving the Twin Cities (Saint Paul, Minneapolis), Duluth and Rochester"
    // TODO: more
    const keywords = ['behind-the-wheel', 'adult drivers', 'nervous drivers', 'education', 'esl', 'behind the wheel', 'minnesota', 'twin cities', 'nervous', 'english as second language', 'minneapolis', 'saint paul', 'st. paul', 'midway driving school', 'midway driving', 'driving school', 'anxious', 'anxious drivers', 'adult', 'locations', 'rates', 'hours', 'lessons', 'driving', 'drivers']
    return (
      <Layout>
        <SEO
          title={title}
          keywords={keywords} />
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
