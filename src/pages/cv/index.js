import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const title = `
Curriculum Vitae
`;

const date = `
January 1, 2022
`;

const text = `
Below is my CV, or you can contact me for more information.
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
          <iframe title="CV" src="https://docs.google.com/document/d/e/2PACX-1vQXKig9kIAsp91C1J5U36m5eo4-8OcSVhMfbEtP2NsSC-mn55kp7X35K6UY0D7eqA/pub?embedded=true" width={800} height={500}></iframe>
        </Row>
      </Container>
    );
  }
}

export default CV;
