import { Container, Jumbotron, Button } from "react-bootstrap"

const Welcome = (props) => (
  <Jumbotron>
    <Container>
      <div className="d-flex justify-content-between">
        <div>
          <h1>Welcome to Strive Books</h1>
          <p>Browse all the latest releases.</p>
          <p>
            <Button className="learn-btn" variant="primary">
              Learn more
            </Button>
          </p>
        </div>
        <div className="jumbo-img"></div>
      </div>
    </Container>
  </Jumbotron>
)

export default Welcome
