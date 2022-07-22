import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

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
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{text}</p>
      </Container>
    );
  }
}

export default CV;
