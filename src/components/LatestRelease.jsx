import { Container, Row, Col, Form } from "react-bootstrap"
import React from "react"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"

class LatestRelease extends React.Component {
  state = {
    searchInput: "",
    selectedBook: undefined,
    // asin: undefined,
  }

  // selectBook = () => {
  //   console.log("working")
  //   this.setState({ selectedBook: !this.state.selectedBook })
  //   console.log(this.state.asin)
  // }

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
                    <Col xs={12} sm={6} xl={4} key={element.asin}>
                      <SingleBook
                        changeSelected={(asin) =>
                          this.setState({ selectedBook: asin })
                        }
                        selectedBook={this.state.selectedBook}
                        book={element}
                      />
                    </Col>
                  ))}
              </Row>
            </Container>
          </Col>
          <Col>
            <CommentArea selectedBook={this.state.selectedBook} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default LatestRelease
