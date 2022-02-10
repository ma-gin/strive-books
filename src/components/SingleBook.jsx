import React from "react"
import { Card } from "react-bootstrap"

class SingleBook extends React.Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? "3px solid red" : "none" }}>
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body className="d-flex align-items-center book-title">
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Title>€{this.props.book.price}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
