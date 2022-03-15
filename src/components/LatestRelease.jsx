import { Container, Row, Col, Form } from "react-bootstrap"
import React, { useState } from "react"
import MainDisplay from "./MainDisplay"

export default function LatestRelease(props) {
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(true)
  const [asin, setAsin] = useState(undefined)

  const selectBook = (item) => {
    setSelected(!selected)
    setAsin(item)
    console.log(selected)
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="formBasicEmail" className="mb-5">
            <Form.Label className="search-title">
              Search Our Latest Releases
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <MainDisplay
        books={props.books}
        search={search}
        id={asin}
        select={selectBook}
      />
    </Container>
  )
}
