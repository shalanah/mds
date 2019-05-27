module.exports = {
  siteMetadata: {
    title: `Midway Driving School – ESL/Nervous Adult and Home School Behind the Wheel Driving Lessons Serving the Twin Cities (Saint Paul, Minneapolis), Duluth and Rochester`,
    author: `Midway Driving School`,
    description: `Midway Driving School - Driver education, tips, locations, rates, and hours`,
    siteUrl: `https://midwaydrivingschools.com`,
    keywords: [
      'behind-the-wheel',
      'adult drivers',
      'nervous drivers',
      'education',
      'esl',
      'behind the wheel',
      'minnesota',
      'twin cities',
      'nervous',
      'english as second language',
      'minneapolis',
      'saint paul',
      'st. paul',
      'midway driving school',
      'midway driving',
      'driving school',
      'anxious',
      'anxious drivers',
      'adult',
      'locations',
      'rates',
      'hours',
      'lessons',
      'driving',
      'drivers'
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            subsets: [`latin`],
            variants: [`300`, `400`, `500`, `700`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-images`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Midway Driving School`,
        short_name: `MDS`,
        start_url: `https://midwaydrivingschools.com`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/mds-icon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
}
