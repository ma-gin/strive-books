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
            <Form.Group controlId="formBasicEmail" className="mb-5">
              <Form.Label className="search-title">
                Search Our Latest Releases
              </Form.Label>
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
          <Col xs={12} sm={9} md={8} lg={7}>
            <Container>
              <Row>
                {this.props.books
                  .filter((element) =>
                    element.title.toLowerCase().includes(this.state.searchInput)
                  )
                  .map((element) => (
                    <Col xs={6} key={element.asin}>
                      <SingleBook book={element} />
                    </Col>
                  ))}
              </Row>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}

export default LatestRelease
