import React, { useState, useEffect, useCallback } from "react"

import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import { Container, Row, Col, Dropdown } from "react-bootstrap"
import Layout from "../../components/layout"
import fontsData from "../../data/abrilFatface.json"

function AbrilFatface() {
  const [fonts, setFonts] = useState([])

  useEffect(() => {
    setFonts(
      fontsData.abrilFatface.map(item => ({
        ...item,
        overflow: false,
        alignmentBig: "text-left",
        alignmentSmall: "text-center",
      }))
    )
  }, [])

  const onRemoveOverflow = i => {
    setFonts(
      fonts.map((item, j) => (j !== i ? item : { ...item, overflow: false }))
    )
  }

  const onAddOverflow = i => {
    setFonts(
      fonts.map((item, j) => (j !== i ? item : { ...item, overflow: true }))
    )
  }

  const onAddTextLeftBig = i => {
    const updatedData = fonts.map((item, idx) => {
      if (idx === i) {
        return {
          ...item,
          alignmentBig: "text-left",
        }
      }
      return item
    })
    setFonts(updatedData)
  }

  const onAddTextLeftSmall = i => {
    const updatedData = fonts.map((item, idx) => {
      if (idx === i) {
        return {
          ...item,
          alignmentSmall: "text-left",
        }
      }
      return item
    })
    setFonts(updatedData)
  }

  const onAddTextCenterBig = i => {
    const updatedData = fonts.map((item, idx) => {
      if (idx === i) {
        return {
          ...item,
          alignmentBig: "text-center",
        }
      }
      return item
    })
    setFonts(updatedData)
  }

  const onAddTextCenterSmall = i => {
    const updatedData = fonts.map((item, idx) => {
      if (idx === i) {
        return {
          ...item,
          alignmentSmall: "text-center",
        }
      }
      return item
    })
    setFonts(updatedData)
  }

  const onAddTextRightBig = i => {
    const updatedData = fonts.map((item, idx) => {
      if (idx === i) {
        return {
          ...item,
          alignmentBig: "text-end",
        }
      }
      return item
    })
    setFonts(updatedData)
  }

  const onAddTextRightSmall = i => {
    const updatedData = fonts.map((item, idx) => {
      if (idx === i) {
        return {
          ...item,
          alignmentSmall: "text-end",
        }
      }
      return item
    })
    setFonts(updatedData)
  }

  function onSizeChangeBig(i, event) {
    const sizeValueUpdate = event.target.value
    const updatedData = fonts.map((item, idx) => {
      if (idx === i) {
        return {
          ...item,
          sizeValueBig: sizeValueUpdate,
        }
      }
      return item
    })
    setFonts(updatedData)
  }

  function onSizeChangeSmall(i, event) {
    const sizeValueUpdate = event.target.value
    const updatedData = fonts.map((item, idx) => {
      if (idx === i) {
        return {
          ...item,
          sizeValueSmall: sizeValueUpdate,
        }
      }
      return item
    })
    setFonts(updatedData)
  }

  function onLineHeightChangeBig(i, event) {
    const lineHeightValueUpdate = event.target.value
    const updatedData = fonts.map((item, idx) => {
      if (idx === i) {
        return {
          ...item,
          lineHeightValueBig: lineHeightValueUpdate,
        }
      }
      return item
    })
    setFonts(updatedData)
  }

  function onTextChangeBig(i, event) {
    const newText = event.target.innerText
    const updatedData = fonts.map((item, idx) => {
      if (idx === i) {
        return {
          ...item,
          textBig: newText,
        }
      }
      return item
    })
    setFonts(updatedData)
  }

  function onTextChangeSmall(i, event) {
    const newText = event.target.innerText
    const updatedData = fonts.map((item, idx) => {
      if (idx === i) {
        return {
          ...item,
          textSmall: newText,
        }
      }
      return item
    })
    setFonts(updatedData)
  }

  const onApplyAllBig = useCallback(
    i => {
      const updatedData = fonts.map((item, idx) => {
        if (idx !== i) {
          return {
            ...item,
            overflow: fonts[i].overflow,
            alignmentBig: fonts[i].alignmentBig,
            sizeValueBig: fonts[i].sizeValueBig,
            lineHeightValueBig: fonts[i].lineHeightValueBig,
            textBig: fonts[i].textBig,
          }
        }
        return item
      })
      setFonts(updatedData)
    },
    [fonts]
  )

  const onApplyAllSmall = useCallback(
    i => {
      const updatedData = fonts.map((item, idx) => {
        if (idx !== i) {
          return {
            ...item,
            alignmentSmall: fonts[i].alignmentSmall,
            sizeValueSmall: fonts[i].sizeValueSmall,
            lineHeightValueSmall: fonts[i].lineHeightValueSmall,
            textSmall: fonts[i].textSmall,
          }
        }
        return item
      })
      setFonts(updatedData)
    },
    [fonts]
  )

  function onResetAllBig() {
    setFonts(
      fonts.map(item => ({
        ...item,
        overflow: true,
        alignmentBig: "text-left",
        sizeValueBig: item.sizeValueDefaultBig,
        lineHeightValueBig: item.lineHeightValueDefaultBig,
        textBig: item.textDefaultBig,
      }))
    )
  }

  function onResetAllSmall() {
    setFonts(
      fonts.map(item => ({
        ...item,
        alignmentSmall: "text-center",
        sizeValueSmall: item.sizeValueDefaultSmall,
        lineHeightValueSmall: item.lineHeightValueDefaultSmall,
        textSmall: item.textDefaultSmall,
      }))
    )
  }

  function onResetBig(i) {
    const updatedData = fonts.map((item, idx) => {
      if (idx === i) {
        return {
          ...item,
          overflow: true,
          alignmentBig: "text-left",
          sizeValueBig: item.sizeValueDefaultBig,
          lineHeightValueBig: item.lineHeightValueDefaultBig,
          textBig: item.textDefaultBig,
        }
      }
      return item
    })
    setFonts(updatedData)
  }

  function onResetSmall(i) {
    const updatedData = fonts.map((item, idx) => {
      if (idx === i) {
        return {
          ...item,
          alignmentSmall: "text-center",
          sizeValueSmall: item.sizeValueDefaultSmall,
          lineHeightValueSmall: item.lineHeightValueDefaultSmall,
          textSmall: item.textDefaultSmall,
        }
      }
      return item
    })
    setFonts(updatedData)
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: "tester-section" }} />
      <Layout>
        <Container fluid className="abril-fatface">
          <Container fluid className="work-nav fixed-top">
            <div className="d-md-flex d-none justify-content-between page-light">
              <div className="scroll">
                <ul className="work-link-light">
                  <li>
                    <a href="#tester">Tester</a>
                  </li>
                  <li>
                    <a href="#info">Info</a>
                  </li>
                </ul>
              </div>
              <div className="next">
                <ul className="arrow-link-light">
                  <li>
                    <Link to="/fonts/ultra">
                      <i className="bi bi-arrow-left"></i>
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right text-disabled"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex d-md-none justify-content-between page-light">
              <div className="prev">
                <Link to="/fonts/ultra">
                  <i className="bi bi-arrow-left"></i>
                </Link>
              </div>
              <div className="scroll">
                <ul className="work-link-light">
                  <li>
                    <a href="#tester">Tester</a>
                  </li>
                  <li>
                    <a href="#info">Info</a>
                  </li>
                </ul>
              </div>
              <div className="next">
                <i className="bi bi-arrow-right text-disabled"></i>
              </div>
            </div>
          </Container>
          <Container fluid className="fonts font-name-contain" id="tester">
            <Row>
              <Col md={12}>
                <p className="font-name-header abril-fatface">Abril Fatface</p>
              </Col>
            </Row>
          </Container>
          <Container fluid className="tester-contain">
            {fonts.map((item, i) => (
              <Row key={i}>
                {/* Big */}
                <Col className="unit-big d-md-block d-none" md={12}>
                  <form className="form">
                    <div className="d-flex tester-nav justify-content-between">
                      <div className="weight-unit d-flex">
                        <div className="weight">{item.singleName}</div>
                        <div className="size-unit">
                          <input
                            type="range"
                            name="size"
                            min={item.sizeMinBig}
                            max={item.sizeMaxBig}
                            value={item.sizeValueBig}
                            step={item.sizeStepBig}
                            className="form-range range size"
                            aria-label="Size"
                            onChange={event => onSizeChangeBig(i, event)}
                          ></input>
                        </div>
                        <div
                          className={
                            item.overflow
                              ? "line-height-unit d-none"
                              : "line-height-unit"
                          }
                        >
                          <input
                            type="range"
                            name="line-height"
                            min={item.lineHeightMinBig}
                            max={item.lineHeightMaxBig}
                            value={item.lineHeightValueBig}
                            step={item.lineHeightStepBig}
                            className="form-range range line-height"
                            aria-label="Line Height"
                            onChange={event => onLineHeightChangeBig(i, event)}
                          ></input>
                        </div>
                        <div
                          className={
                            item.overflow ? "alignment d-none" : "alignment"
                          }
                        >
                          <button
                            type="button"
                            name="align"
                            className="btn btn-link text-left"
                            onClick={() => onAddTextLeftBig(i)}
                          >
                            <i className="bi bi-text-left"></i>
                          </button>
                          <button
                            type="button"
                            name="align"
                            className="btn btn-link text-center"
                            onClick={() => onAddTextCenterBig(i)}
                          >
                            <i className="bi bi-text-center"></i>
                          </button>
                          <button
                            type="button"
                            name="align"
                            className="btn btn-link text-right"
                            onClick={() => onAddTextRightBig(i)}
                          >
                            <i className="bi bi-text-right"></i>
                          </button>
                        </div>
                        <div className="tools">
                          <button
                            type="button"
                            name="align"
                            className={
                              item.overflow
                                ? "btn btn-link text-tools"
                                : "btn btn-link text-tools d-none"
                            }
                            onClick={() => onRemoveOverflow(i)}
                          >
                            <i className="bi bi-tools"></i>
                          </button>
                          <button
                            type="button"
                            name="align"
                            className={
                              item.overflow
                                ? "btn btn-link text-arrows d-none"
                                : "btn btn-link text-arrows"
                            }
                            onClick={() => onAddOverflow(i)}
                          >
                            <i className="bi bi-arrows-angle-contract"></i>
                          </button>
                        </div>
                      </div>
                      <div className="options-unit">
                        <button
                          type="button"
                          className="btn btn-link apply-all"
                          onClick={() => onApplyAllBig(i)}
                        >
                          Apply All
                        </button>
                        <button
                          type="button"
                          className="btn btn-link reset-all"
                          onClick={onResetAllBig}
                        >
                          Reset All
                        </button>
                        <button
                          type="button"
                          className="btn btn-link reset"
                          onClick={() => onResetBig(i)}
                        >
                          <i className="bi bi-arrow-counterclockwise"></i>
                        </button>
                      </div>
                    </div>
                    <div
                      className="text-unit"
                      onClick={() => onRemoveOverflow(i)}
                      onKeyDown={() => onRemoveOverflow(i)}
                      role="none"
                    >
                      <p
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning="true"
                        className={
                          item.overflow
                            ? "overflow " +
                              item.className +
                              " " +
                              item.alignmentBig
                            : item.className + " " + item.alignmentBig
                        }
                        style={{
                          fontSize: item.sizeValueBig + "em",
                          lineHeight: item.lineHeightValueBig + "em",
                        }}
                        onBlur={event => onTextChangeBig(i, event)}
                        role="none"
                      >
                        {item.textBig}
                      </p>
                    </div>
                  </form>
                </Col>
                {/* Small */}
                <Col className="unit-small d-md-none" md={12}>
                  <form className="form">
                    <div className="tester-nav">
                      <div className="d-flex justify-content-between">
                        <div className="weight-unit">
                          <div className="weight">{item.singleName}</div>
                        </div>
                        <div className="options-unit">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="link"
                              id="dropdown-light"
                              className="options"
                            >
                              Options
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>
                                <button
                                  type="button"
                                  className="btn btn-link apply-all"
                                  onClick={() => onAddTextLeftSmall(i)}
                                >
                                  Left Align
                                </button>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <button
                                  type="button"
                                  className="btn btn-link apply-all"
                                  onClick={() => onAddTextCenterSmall(i)}
                                >
                                  Center Align
                                </button>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <button
                                  type="button"
                                  className="btn btn-link apply-all"
                                  onClick={() => onAddTextRightSmall(i)}
                                >
                                  Right Align
                                </button>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <button
                                  type="button"
                                  className="btn btn-link apply-all"
                                  onClick={() => onApplyAllSmall(i)}
                                >
                                  Apply to All
                                </button>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <button
                                  type="button"
                                  className="btn btn-link reset-all"
                                  onClick={onResetAllSmall}
                                >
                                  Reset All
                                </button>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <button
                                  type="button"
                                  className="btn btn-link reset"
                                  onClick={() => onResetSmall(i)}
                                >
                                  Reset
                                </button>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <div className="size-unit">
                        <input
                          type="range"
                          name="size"
                          min={item.sizeMinSmall}
                          max={item.sizeMaxSmall}
                          value={item.sizeValueSmall}
                          step={item.sizeStepSmall}
                          className="form-range range size"
                          aria-label="Size"
                          onChange={event => onSizeChangeSmall(i, event)}
                        ></input>
                      </div>
                    </div>
                    <div className="text-unit">
                      <p
                        contentEditable="true"
                        spellCheck="false"
                        suppressContentEditableWarning="true"
                        className={item.className + " " + item.alignmentSmall}
                        style={{
                          fontSize: item.sizeValueSmall + "em",
                          lineHeight: item.lineHeightValueSmall + "em",
                        }}
                        onBlur={event => onTextChangeSmall(i, event)}
                        role="none"
                      >
                        {item.textSmall}
                      </p>
                    </div>
                  </form>
                </Col>
              </Row>
            ))}
          </Container>
          <Container className="font-desc" id="info">
            <Row>
              <Col md={12}>
                <p className="desc-name">Abril Fatface</p>
                <p className="desc-status">Designer: TypeTogether</p>
                <p className="desc-status">
                  "Abril Fatface is part of a bigger type family system, Abril,
                  which includes 18 styles for all Display and Text uses. The
                  titling weights are a contemporary revamp of classic Didone
                  styles, display both neutrality and strong presence on the
                  page to attract reader attention with measured tension by its
                  curves, good color and high contrast." &mdash; Google Fonts
                </p>
                <p className="desc-status">
                  <a href="https://fonts.google.com/specimen/Abril+Fatface">
                    Abril Fatface on Google Fonts
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </Layout>
    </>
  )
}

export default AbrilFatface
