import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const title = 'About Me';

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <Row>
          <Col>
            <Image src="/laurel-about-me.jpg" rounded style={{marginTop: 50, marginBottom: 50, width: '25rem'}}></Image>
          </Col>
          <Col style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>
            <p class="text-left">
              I am originally from the beautiful foothills of the Sierra Nevada in California. I received my undergraduate degree in
              International Relations from University of California Davis. And when not hitting the books, I am an avid gardener, artist, and tennis player!
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
