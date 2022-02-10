// import { Modal, Button } from "react-bootstrap"
import { Component } from "react"
import { ListGroup, Spinner, Alert } from "react-bootstrap"
// This component will receive as a prop one pasta object or null

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount = async (props) => {
    console.log("hellooooo")
    const bookAsin = this.props.selectedBook.asin
    console.log(bookAsin)
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
        console.log(data)
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

  render(props) {
    //   console.log(props.selectedBook)
    return (
      /* <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
        
              <Modal.Body>
                <p>Modal body text goes here.</p>
              </Modal.Body>
        
              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>*/
      <p>Hi</p>
      //   props.selectedBook &&
      //    props.selectedBook.comments.map((element) => (
      //     <ListGroup.Item key={element.id}>{element.comment}</ListGroup.Item>
      //   ))
    )
  }
}

export default CommentArea
