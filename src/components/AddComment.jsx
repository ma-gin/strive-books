import { Form, Button } from "react-bootstrap"
import { Component } from "react"

class AddComment extends Component {
  state = {
    newComment: "",
  }

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="ml-3">Post Comment</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default AddComment
