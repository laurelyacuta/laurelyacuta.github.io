import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

class NavBar extends Component {
  render() {
    return(
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Laurel Yacuta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="cv">CV</Nav.Link>
              <NavDropdown title="Research" menuVariant="dark">
                <NavDropdown.Item href="publications">Publications</NavDropdown.Item>
                <NavDropdown.Item href="research-applied">Research Applied</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="teaching">Teaching</Nav.Link>
              <Nav.Link href="about-me">About Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="dark" href="mailto:lyacuta@ucdavis.edu">
              <img
                src="./envelope-solid.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Email"/>
            </Button>
            <Button variant="dark" href="https://www.linkedin.com/in/laurel-yacuta-890527129?trk=people-guest_people_search-card">
              <img
                src="./linkedin-brands.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="LinkedIn"/>
            </Button>
            <Button variant="dark" href="https://github.com/laurelyacuta">
              <img
                src="./github-brands.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="GitHub"/>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
