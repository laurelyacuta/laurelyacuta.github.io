import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

const title = `
Teaching
`;

const text = `
This is my Teaching page.
`;

class Teaching extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <Row className="justify-content-md-center">
          <p>{text}</p>
        </Row>
      </Container>
    );
  }
}

export default Teaching;
