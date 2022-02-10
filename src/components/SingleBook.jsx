import React from "react"
import { Card } from "react-bootstrap"
import PriceBadge from "./PriceBadge"

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
          <PriceBadge color="success" text={this.props.book.price} />
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
