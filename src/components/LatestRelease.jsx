import { Container, Row, Col, Form } from "react-bootstrap"
import React from "react"
import SingleBook from "./SingleBook"

class LatestRelease extends React.Component {
  state = {
    searchInput: "",
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search"
                value={this.state.searchInput}
                onChange={(e) => this.setState({ searchInput: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((element) =>
              element.title.toLowerCase().includes(this.state.searchInput)
            )
            .map((element) => (
              <Col xs={3} key={element.asin}>
                <SingleBook book={element} />
              </Col>
            ))}
        </Row>
      </Container>
    )
  }
}

export default LatestRelease
