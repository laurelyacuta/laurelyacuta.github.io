import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class NavBar extends Component {
  render() {
    return(
      <div className="NavBar">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>Laurel Yacuta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="cv">CV</Nav.Link>
              <Nav.Link href="research">Research</Nav.Link>
              <Nav.Link href="teaching">Teaching</Nav.Link>
              <Nav.Link href="about-me">About Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="dark" href="https://google.com">
              <img
                src="./envelope-solid.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Email"/>
            </Button>
            <Button variant="dark" href="https://google.com">
              <img
                src="./graduation-cap-solid.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Google Scholar"/>
            </Button>
            <Button variant="dark" href="https://google.com">
              <img
                src="./linkedin-brands.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="LinkedIn"/>
            </Button>
            <Button variant="dark" href="https://google.com">
              <img
                src="./github-brands.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="GitHub"/>
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
