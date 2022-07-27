import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';

const title = 'Welcome!';

const text_p1 = 'Hi all and thank you for visiting my website! I am currently a PhD Doctoral Candidate of Political Science at University of California, Davis.';

const text_2 = 'My research agenda focuses broadly on examining the causes of a variety of types of intrastate violence on the regime and societal level. My graduate work, advised primarily by Josephine Andrews and Lauren Young, focused specifically on disaggregating regime types by separating civil liberties from electoral components and exploring the variances within non-electoral components (civil society freedoms, freedom of religion, and rule of law) affect intrastate violence. In another project I am working on we test the role of ethnicity and religion as sperate identities in a novel randomized control survey experiment in India where we aim to illuminate which identity is most likely stir violence and under what conditions an identity can contribute to violence. I am also involved in projects on effects of state repression on voter behavior and trust in regimes in Zimbabwe and examining Eastern versus Western Europe Cabinet stability. Recently, I have contracted with the World Bank to consult on the Zimbabwe Hight Frequency Telephone Survey Report (ZIMTRAC) survey analysis. I have also a methodological interest in multi-dimensional scaling, unexpected event during survey design using geolocation data, and survey analysis.';

class Home extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" >
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <Row>
          <Col>
            <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" rounded style={{marginTop: 50, marginBottom: 50, width: '25rem'}}></Image>
          </Col>
          <Col style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>
            <p class="text-left">{text_p1}</p>
            <p class="text-left">{text_2}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
