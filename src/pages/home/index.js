import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container>
          <Row>
            <Col/>
            <Col>
              <Card style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>
                <Card.Img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" rounded></Card.Img>
                <Card.Body>
                  <Card.Title>
                    Welcome!
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
