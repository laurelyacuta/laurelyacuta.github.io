import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';

const title = `
Welcome!
`;

const text = `
Greek was first written in Mycenae with a script known as Linear B, which was used between about 1500 and 1200 BC. This variety of Greek is known as Mycenaean. On Crete another script, known as the Cypriot syllabary, was used to write the local variety of Greek between about 1200 and 300 BC.
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <Row>
          <Col>
            <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" rounded style={{marginTop: 50, marginBottom: 50, width: '25rem'}}></Image>
          </Col>
          <Col>
            <p class="text-left" style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{text}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
