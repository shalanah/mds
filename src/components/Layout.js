import React from 'react'
import Global from './Global'
import Header from './Header'
import cssVars from 'css-vars-ponyfill';
import Footer from './Footer'
import RecentPosts from './RecentPosts'

class Layout extends React.Component {
  componentDidMount () {
    // Ponyfill for css vars
    cssVars()
  }
  render() {
    const { children } = this.props
    return (
      <div>
        <Global />
        <Header />
        {children}
        <RecentPosts />
        <Footer />
      </div>
    )
  }
}

export default Layout
