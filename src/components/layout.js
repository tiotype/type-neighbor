import React from "react"
import PropTypes from "prop-types"
import Navigation from "./navigation.js"
import Footer from "./footer.js"

import "../assets/scss/style.scss"

import Seo from "./seo.js"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
