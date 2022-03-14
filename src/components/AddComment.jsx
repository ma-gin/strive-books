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
    if (this.state.comment.comment !== "") {
      e.stopPropagation()
      e.preventDefault()

      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/",
          {
            method: "POST",
            body: JSON.stringify(this.state.comment),
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
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
            ...this.state,
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
