import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container className="p-3">
          <Card>
            <Card.Body>
              <Card.Title>Welcome!</Card.Title>
              <Card.Img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" rounded style={{
                width: 300,
                verticalAlign: "center"
              }}></Card.Img>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Home;
