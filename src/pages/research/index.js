import React, { Component } from 'react';
import Container from "react-bootstrap/Container";

const title = `
Research
`;

const text = `
This is my Research page.
`;

class Research extends Component {
  render() {
    return (
      <Container>
        <h1>{title}</h1>
        <p>{text}</p>
      </Container>
    );
  }
}

export default Research;
