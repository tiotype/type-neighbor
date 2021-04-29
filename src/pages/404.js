import React from "react"

import { Helmet } from "react-helmet"

import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <>
    <Helmet bodyAttributes={{ class: "response-section single" }} />
    <Layout>
      <Container className="response response-contain">
        <Row>
          <Col md={8}>
            <p className="info-header">Not Found</p>
            <p className="info-header">
              You just hit a route that doesn&#39;t exist.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
)

export default NotFoundPage
