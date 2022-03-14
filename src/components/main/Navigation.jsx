import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = (props) => (
  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        <Link to="/" className="white">
          {props.bookstore}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/sign-up" className="nav-link">
            Sign Up
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigation
