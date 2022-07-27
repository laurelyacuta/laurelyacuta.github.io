import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

const title = 'About Me';

const text = 'I am originally from the beautiful foothills of the Sierra Nevada in California. I received my undergraduate degree in International Relations from University of California Davis. And when not hitting the books, I am an avid gardener, artist, and tennis player!';

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <Row className="justify-content-md-center">
          <p class="text-left">{text}</p>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
