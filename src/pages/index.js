import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Services from '../components/Services'
import Locations from '../components/Locations'
import Faq from '../components/Faq'
import HomepageBanner from '../components/HomepageBanner'
import SEO from '../components/seo'

// WHAT IS A STATIC QUERY??? 
class Home extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const title = "Midway Driving School - ESL_Nervous Adult and Home School Behind the Wheel Driving Lessons Serving the Twin Cities (Saint Paul, Minneapolis), Duluth and Rochester"
    // TODO: more with SEO
    const keywords = ['behind-the-wheel', 'adult drivers', 'nervous drivers', 'education', 'esl', 'behind the wheel', 'minnesota', 'twin cities', 'nervous', 'english as second language', 'minneapolis', 'saint paul', 'st. paul', 'midway driving school', 'midway driving', 'driving school', 'anxious', 'anxious drivers', 'adult', 'locations', 'rates', 'hours', 'lessons', 'driving', 'drivers']
    return (
      <Layout>
        <SEO
          title={title}
          keywords={keywords} />
        <HomepageBanner />
        <Services />
        <Locations />
        <Faq />
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
