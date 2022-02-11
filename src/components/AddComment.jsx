import { Form, Button, Alert } from "react-bootstrap"
import { Component } from "react"

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "5",
      elementId: this.props.id,
    },
    submit: false,
  }

  handleChange = (property, value) => {
    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [property]: value,
      },
    })
  }

  handleClick = (e) => {
    e.stopPropagation()
  }

  handleSumbit = async (e) => {
    e.stopPropagation()
    e.preventDefault()

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZlZTc1NTllNzcxNjAwMTUzYTgwMjEiLCJpYXQiOjE2NDQwOTUzMTcsImV4cCI6MTY0NTMwNDkxN30.8Ssl3Nnftqadb6oAn8kI3oKkdVUvc51ajCi2-9nmQgE",
            "Content-type": "application/json",
          },
        }
      )
      if (response.ok) {
        this.setState({ submit: true })
        this.setState({
          ...this.state,
          comment: {
            ...this.setState({ comment: "" }),
          },
        })
      } else {
        alert("An error occured! :(")
        if (response.status === 400) {
          alert("Data Error")
        }
        if (response.status === 404) {
          alert("Not Found")
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSumbit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="ml-3">Post Comment</Form.Label>
            <Form.Control
              onClick={this.handleClick}
              onChange={(e) => this.handleChange("comment", e.target.value)}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Button
            onClick={this.handleSumbit}
            className="w-100"
            variant="primary"
            type="submit">
            Submit
          </Button>
        </Form>
        {this.state.submit && <Alert variant="success">Comment posted</Alert>}
      </>
    )
  }
}

export default AddComment
