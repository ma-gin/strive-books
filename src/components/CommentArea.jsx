// import { Modal, Button } from "react-bootstrap"
import { Component } from "react"
import { ListGroup, Spinner, Alert } from "react-bootstrap"
// import Comment from "./Comment"
import AddComment from "./AddComment"

const Comment = ({ comment }) => {
  return <p className="comment comment-style">{comment}</p>
}

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.selectedBook !== this.props.selectedBook) {
      console.log(this.props.selectedBook)
      const bookAsin = this.props.selectedBook
      const baseURL = "https://striveschool-api.herokuapp.com/api/comments/"

      try {
        let response = await fetch(baseURL + bookAsin, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZlZTc1NTllNzcxNjAwMTUzYTgwMjEiLCJpYXQiOjE2NDQwOTUzMTcsImV4cCI6MTY0NTMwNDkxN30.8Ssl3Nnftqadb6oAn8kI3oKkdVUvc51ajCi2-9nmQgE",
          },
        })
        if (response.ok) {
          let data = await response.json()
          this.setState({
            comments: data,
            isLoading: false,
          })
        } else {
          this.setState({
            isLoading: false,
            isError: true,
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  render() {
    // console.log(this.props.selectedBook)
    if (!this.props.selectedBook) return null
    return (
      <div className="my-3 p-2 comment-style">
        <h2 className="comment-title">Comments</h2>
        {this.state.isLoading && (
          <Spinner animation="border" variant="success" className="mb-2" />
        )}
        {this.state.isError && (
          <Alert variant="danger">Something went wrong</Alert>
        )}
        <ListGroup>
          {!this.state.isLoading &&
            !this.state.isError &&
            this.state.comments.length === 0 && (
              <ListGroup.Item>No comments.</ListGroup.Item>
            )}
          {this.state.comments.map((comment) => (
            <Comment key={comment._id} comment={comment.comment} />
          ))}
        </ListGroup>
        <AddComment id={this.props.selectedBook} />
      </div>
    )
  }
}

export default CommentArea
