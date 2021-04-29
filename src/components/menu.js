import React, { useState } from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

const ToggleContent = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false)
  const hide = () => setIsShown(false)
  const show = () => setIsShown(true)

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  )
}

const Menu = () => (
  <ToggleContent
    toggle={show => (
      <button
        type="button"
        className="menu-open"
        onClick={show}
        aria-label="Menu Open"
      >
        <i className="bi bi-list"></i>
      </button>
    )}
    content={hide => (
      <div className="overlay">
        <Container fluid>
          <div className="menu-top d-flex justify-content-end fixed-top">
            <div>
              <button
                type="button"
                className="menu-close"
                onClick={hide}
                aria-label="Menu Close"
              >
                <i className="bi bi-x"></i>
              </button>
            </div>
          </div>
          <Row>
            <Col>
              <div className="overlay-list-container">
                <ul className="overlay-list">
                  <li>
                    <Link to="/" className="home-nav">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/fonts" className="fonts-nav">
                      Fonts
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://github.com/tiotype/type-neighbor"
                      className="info-nav"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )}
  />
)

export default Menu
