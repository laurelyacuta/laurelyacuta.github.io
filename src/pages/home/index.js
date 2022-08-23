import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const title = 'Welcome!';

class Home extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" >
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <Row>
          <Col>
            <Image src="/laurel-profile.png" rounded style={{marginTop: 50, marginBottom: 50, width: '25rem'}}></Image>
          </Col>
          <Col style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>
            <p class="text-left">
              Hi all and thank you for visiting my website! I am currently a PhD Doctoral Candidate of Political Science at University of California, Davis.
            </p>
            <p class="text-left">
              My research agenda focuses broadly on examining the causes of intrastate violence on the regime and societal level. My graduate work, advised primarily by Josephine Andrews and Lauren Young, focuses specifically on disaggregating regime types by separating civil liberties from electoral dimensions and exploring the variances within non-electoral components (civil society freedoms, freedom of religion, and rule of law) affect intrastate violence.
              I have a methodological interest in multi-dimensional scaling, unexpected events during survey design using geolocation data, experiments, and survey analysis.
            </p>
            <p class="text-left">
              In another project I am working on, my coauthor and I test the role of ethnicity and religion as two separate identities in a novel randomized control survey experiment in India. In this survey we aim to illuminate which identity is most likely to stir or prevent violence and under what conditions an identity can contribute or deter to violence.
            </p>
            <p class="text-left">
              Other projects I am involved in include: effects of state repression on voter behavior and trust in regimes in Zimbabwe; examining Eastern versus Western Europe Cabinet stability; and contracting with the World Bank to consult on the Zimbabwe High Frequency Telephone Survey Report (ZIMTRAC) survey analysis.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
