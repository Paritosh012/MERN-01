import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar shadow-sm ${
        darkMode ? "navbar-dark" : "navbar-light"
      }`}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          Student Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-3">
            <Nav.Link as={NavLink} to="/insert" className="active">
              Add
            </Nav.Link>
            <Nav.Link as={NavLink} to="/view" className="active">
              View
            </Nav.Link>
            <Nav.Link as={NavLink} to="/update" className="active">
              Update
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="active">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/search" className="active">
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
