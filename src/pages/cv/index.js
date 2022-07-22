import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

const title = `
Curriculum Vitae
`;

const date = `
January 1, 2022
`;

const text = `
Below is my CV, or you can download my CV in pdf format.
`;

class CV extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <Row className="justify-content-md-center">
          <p>{date}</p>
        </Row>
        <Row className="justify-content-md-center">
          <p>{text}</p>
        </Row>
        <Row className="justify-content-md-center">
          <p>Link goes here.</p>
        </Row>
      </Container>
    );
  }
}

export default CV;
