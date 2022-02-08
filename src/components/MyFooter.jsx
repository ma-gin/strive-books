import { Container, Row, Col, Nav} from "react-bootstrap"

const MyFooter = () => (
  <Container>
    <Row>
      <Col xs={12} md={6}>
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
      </Col>
    </Row>
  </Container>
)

export default MyFooter