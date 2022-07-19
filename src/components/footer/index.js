import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends Component {
  render() {
    return(
      <div className="Footer">
        <Navbar className="justify-content-center" bg="light" expand="lg" fixed="bottom">
          <Container>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Copyright © 2022 by Laurel Yacuta. Made with React.
                </Nav.Link>
              </Nav.Item>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
