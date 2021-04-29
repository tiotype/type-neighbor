import React, { useState, useEffect } from "react"

import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import fontsData from "../data/fonts.json"

function Fonts() {
  const [fonts, setFonts] = useState([])

  useEffect(() => {
    setFonts(
      fontsData.fonts.map(item => ({
        ...item,
      }))
    )
  }, [])

  return (
    <>
      <Helmet bodyAttributes={{ class: "fonts-section" }} />
      <Layout>
        <Container fluid className="fonts-contain">
          {fonts.map((item, i) => (
            <Row key={i}>
              {/* Big */}
              <Col className="d-md-block d-none" md={12}>
                <div>
                  <p className={item.className}>
                    <Link to={"/fonts/" + item.route}>{item.fontName}</Link>
                  </p>
                </div>
              </Col>
              {/* Small */}
              <Col className="d-md-none" md={12}>
                <div>
                  <p className={item.className}>
                    <Link to={"/fonts/" + item.route}>{item.fontName}</Link>
                  </p>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </Layout>
    </>
  )
}

export default Fonts
