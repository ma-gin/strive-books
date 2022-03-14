import { Component } from "react"
import { ListGroup, Spinner, Alert } from "react-bootstrap"
import AddComment from "./AddComment"

const baseURL = "https://striveschool-api.herokuapp.com/api/comments/"
const { REACT_APP_TOKEN } = process.env

const Comment = (props) => {
  const removeComment = async () => {
    try {
      await fetch(baseURL + props.comment._id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${REACT_APP_TOKEN}`,
        },
      })
      props.setIsLoading()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="comment comment-style inline d-flex justify-content between ">
      <div className="mr-auto">{props.comment.comment}</div>
      <button
        className="inline btn-danger bold btn-del"
        onClick={removeComment}>
        X
      </button>
    </div>
  )
}

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  componentDidUpdate = async (prevProps) => {
    const bookAsin = this.props.selectedBook
    if (this.state.isLoading) {
      try {
        let response = await fetch(baseURL + bookAsin, {
          headers: {
            Authorization: `Bearer ${REACT_APP_TOKEN}`,
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
    if (prevProps.selectedBook !== this.props.selectedBook) {
      try {
        let response = await fetch(baseURL + bookAsin, {
          headers: {
            Authorization: `Bearer ${REACT_APP_TOKEN}`,
          },
        })
        if (response.ok) {
          let data = await response.json()
          this.setState({
            comments: data,
          })
        } else {
          this.setState({
            isError: true,
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  render() {
    if (!this.props.selectedBook) return null
    return (
      <div className="my-3 p-2 comment-style">
        <h2 className="comment-title">Comments</h2>
        {/* {this.state.isLoading && (
          <div className="cm-spinner">
            <Spinner animation="border" variant="success" className="mb-2" />
          </div>
        )} */}
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
            <Comment
              key={comment._id}
              comment={comment}
              setIsLoading={() => {
                this.setState({ isLoading: true })
              }}
            />
          ))}
        </ListGroup>
        <AddComment
          id={this.props.selectedBook}
          setIsLoading={() => {
            this.setState({ isLoading: true })
          }}
        />
      </div>
    )
  }
}

export default CommentArea
