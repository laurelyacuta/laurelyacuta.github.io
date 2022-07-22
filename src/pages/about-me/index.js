import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

const title = `
About Me
`;

const text = `
This is my About Me page.
`;

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <h1>{title}</h1>
        <p>{text}</p>
      </Container>
    );
  }
}

export default AboutMe;
