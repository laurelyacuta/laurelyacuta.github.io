import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const title = 'Research Applied';

class ResearchApplied extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <Row>
          <Col>
            <Image src="/laurel-research-1.jpg" rounded style={{marginTop: 50, marginBottom: 50, width: '30rem'}}></Image>
          </Col>
          <Col>
          <Image src="/laurel-research-2.jpg" rounded style={{marginTop: 50, marginBottom: 50, width: '30rem'}}></Image>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <p class="text-left">
            Recently, I was invited to show an art piece in the Arts and Humanities 2022 Graduate Exhibition depicting an important finding
            from my dissertation at the <a href="https://manettishremmuseum.ucdavis.edu/">Manetti Shrem Museum</a>. In this painting I embossed
            a graph from the first paper of my dissertation showing the predicted probability of cross cutting components (Rule of Law and Freedom of Expressions)
            on a canvas. Then painted a war scene based on loose compilations of scenes from the Russo-Chechen civil war over it.
          </p>
        </Row>
      </Container>
    );
  }
}

export default ResearchApplied;
