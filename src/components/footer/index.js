import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const year = new Date().getFullYear();

class Footer extends Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="bottom">
        <Container>
          <Nav className="justify-content-center" style={{ flex: 1}}>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Copyright © {year} by Laurel Yacuta. Made with React.
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
