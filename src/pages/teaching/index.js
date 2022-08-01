import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const title = 'Teaching';

class Teaching extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <Row>
          <p class="text-left">
            In my years of schooling, I have been blessed with many amazing teachers that inspired me and solidified my intellectual motivations to
            continue investigating the world around me. Across many different discipline, pedagogues and personalities, these teachers and professors
            guided me toward my own approach to teaching. As a teacher and political scientist, have sought to similarly inspire my students into
            fulfilling their own academic potential. I am privileged to be able to work with students to kindle their own desires for knowledge
            and hope to help inspire them as my past teachers inspired me.
          </p>
          <p class="text-left">
            In all classes I teach I aim to kindle student's impulses to independently think about and question the world around them.
          </p>
          <p class="text-left">
            Below are various links on some supplemental files on courses I teach. My teaching statement can be found here: Teaching Philosophy
          </p>
        </Row>
      </Container>
    );
  }
}

export default Teaching;
