import React from "react"
import PropTypes from "prop-types"

import "../assets/scss/style.scss"

import Seo from "./seo.js"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
