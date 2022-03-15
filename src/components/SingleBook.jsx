import React from "react"
import { Card } from "react-bootstrap"
import PriceBadge from "./PriceBadge"

class SingleBook extends React.Component {
  // state = {
  //   selected: false,
  // }

  render() {
    return (
      <Card
        className="mr-3 book-card"
        onClick={() => {
          this.props.changeSelected(this.props.book.asin)
        }}>
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body className="d-flex flex-column align-items-center book-title">
          <Card.Title>{this.props.book.title}</Card.Title>
          <PriceBadge color="success" text={this.props.book.price} />
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
