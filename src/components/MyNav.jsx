import { Container, Navbar, Nav } from "react-bootstrap"

const MyNav = (props) => (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">{props.bookstore}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
)

export default MyNav
