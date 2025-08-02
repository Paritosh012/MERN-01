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

  const toggleTheme = () => {
    document.body.classList.toggle("light-theme");
    setDarkMode(!darkMode);
  };

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
          </Nav>
          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search students..."
              className="me-2 search-bar"
              aria-label="Search"
            />
            <Button variant={darkMode ? "outline-info" : "outline-dark"}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
