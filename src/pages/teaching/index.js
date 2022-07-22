import React, { Component } from 'react';
import Container from "react-bootstrap/Container";

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
        <h1>{title}</h1>
        <p>{text}</p>
      </Container>
    );
  }
}

export default Teaching;
