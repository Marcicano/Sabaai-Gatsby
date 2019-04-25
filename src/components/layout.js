/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Footer from "./Globals/Footer"

import "./layout.css"
import "./main.css"
import "./fontawesome.min.css"



const layout = ({ children, props }) => {
  console.log(props)
  return (
    <React.Fragment>
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default layout

