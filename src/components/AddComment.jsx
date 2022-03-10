import { Form, Button, Alert } from "react-bootstrap"
import { Component } from "react"

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "5",
      elementId: undefined,
    },
    submit: false,
  }
  componentDidMount() {
    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        elementId: this.props.id,
      },
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      console.log(this.state)
      this.setState({
        ...this.state,
        comment: {
          ...this.state.comment,
          elementId: this.props.id,
        },
      })
    }
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
    console.log(this.state.comment)
    if (this.state.comment.comment !== "") {
      console.log(this.state.comment.elementId)

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
          setTimeout(() => {
            this.setState({ submit: false })
          }, 2000)
          this.props.setIsLoading()
          this.setState({
            ...this.state, //question
            comment: {
              ...this.state.comment,
              comment: "",
            },
          })
          this.myFormRef.reset()
        } else {
          this.myFormRef.reset()
          alert("An error occured!")
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
  }

  render() {
    // console.log(this.state.comment)
    return (
      <>
        <Form onSubmit={this.handleSumbit} ref={(el) => (this.myFormRef = el)}>
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
        {this.state.submit && (
          <Alert variant="success" className="text-center mt-4">
            Comment posted
          </Alert>
        )}
      </>
    )
  }
}

export default AddComment
