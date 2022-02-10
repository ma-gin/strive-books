import React from "react"
import { Card } from "react-bootstrap"
import PriceBadge from "./PriceBadge"
import CommentArea from "./CommentArea"

class SingleBook extends React.Component {
  state = {
    selectedBook: false,
  }

  render() {
    return (
      <Card
        onClick={() =>
          this.setState({ selectedBook: !this.state.selectedBook })
        }
        style={{ color: this.state.selected ? "red" : "none" }}>
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body className="d-flex flex-column align-items-center book-title">
          <Card.Title>{this.props.book.title}</Card.Title>
          <PriceBadge color="success" text={this.props.book.price} />
        </Card.Body>
        {this.state.selectedBook && (
          <CommentArea selectedBook={this.props.book} />
        )}
      </Card>
    )
  }
}

export default SingleBook
