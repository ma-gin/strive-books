import { Form, Button } from "react-bootstrap"
import { Component } from "react"

class AddComment extends Component {
  state = {
    newComment: "",
    bookAsin: [],
  }
  componentDidMount = (props) => {
    const bookAsin = this.state.bookAsin
    const baseURL = "https://striveschool-api.herokuapp.com/api/comments/"
    console.log(bookAsin)
  }

  handleClick = (e) => {
    e.stopPropagation()
    console.log("wow!")
  }
  handleSumbit = async (e) => {
    e.preventDefaul()

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state.reservation),
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      if (response.ok) {
        console.log(response)
        alert("reservation saved!")
        this.setState({
          reservation: {
            name: "",
            phone: "",
            numberOfPeople: 1,
            smoking: false,
            dateTime: "",
            specialRequests: "",
          },
        })
      } else {
        // what type of error will fall here?
        // here it means you connected to the server, but something went wrong!
        alert("something went wrong! please try again")
        // just some examples...
        if (response.status === 400) {
          alert("some data was wrong")
        }
        if (response.status === 404) {
          alert("not found")
        }
      }
    } catch (error) {
      // what type of error will fall here?
      // you probably have some internet problems :(
      console.log(error)
    }
  }

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="ml-3">Post Comment</Form.Label>
          <Form.Control onClick={this.handleClick} type="text" placeholder="" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default AddComment
