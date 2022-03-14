import { Container, Row, Col, Nav } from "react-bootstrap"

const Footer = () => (
  <Container>
    <Row>
      <Col
        xs={12}
        md={6}
        className="d-flex w-50 mx-auto my-5 my-footer justify-content-between">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
      </Col>
    </Row>
  </Container>
)

export default Footer
