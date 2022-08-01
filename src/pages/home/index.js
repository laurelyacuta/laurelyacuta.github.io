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
              My research agenda focuses broadly on examining the causes of a variety of types of intrastate violence on the regime and societal level.
              My graduate work, advised primarily by Josephine Andrews and Lauren Young, focused specifically on disaggregating regime types by separating
              civil liberties from electoral components and exploring the variances within non-electoral components (civil society freedoms, freedom of religion, and rule of law)
              affect intrastate violence. In another project I am working on we test the role of ethnicity and religion as sperate identities in a novel randomized
              control survey experiment in India where we aim to illuminate which identity is most likely stir violence and under what conditions an identity can contribute to violence.
              I am also involved in projects on effects of state repression on voter behavior and trust in regimes in Zimbabwe and examining Eastern versus Western Europe Cabinet stability.
              Recently, I have contracted with the World Bank to consult on the Zimbabwe Hight Frequency Telephone Survey Report (ZIMTRAC) survey analysis.
              I have also a methodological interest in multi-dimensional scaling, unexpected event during survey design using geolocation data, and survey analysis.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
