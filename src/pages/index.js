import React from "react"

import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layoutHome"

const IndexPage = () => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "home-section" }} />
      <Layout>
        <Container fluid className="home home-contain">
          <Row>
            <Col>
              <p className="header">
                Type Neighbor is a Gatsby/React-based type tester boilerplate.
                It is meant for type designers or foundries who use React or
                Gatsby for their specimen sites or portfolios. The initial state
                of Type Neighbor is built with six fonts from the Google Fonts
                library as a means to demonstrate how it can work. It currently
                supports static font families or single fonts. Variable font
                tools and full glyph sets will be added in the future.
              </p>
              <p className="intro">
                <Link to="/fonts">Try Type Neighbor</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
