import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return(
      <div className="NavBar">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>Laurel Yacuta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#cv">CV</Nav.Link>
              <Nav.Link href="#research">Research</Nav.Link>
              <Nav.Link href="#teaching">Teaching</Nav.Link>
              <Nav.Link href="#about-me">About Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
