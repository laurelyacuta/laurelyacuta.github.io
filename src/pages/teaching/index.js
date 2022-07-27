import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

const title = 'Teaching';

const text_p1 = 'In my years of schooling, I have been blessed with many amazing teachers that inspired me and solidified my intellectual motivations to continue investigating the world around me. Across many different discipline, pedagogues and personalities, these teachers and professors guided me toward my own approach to teaching. As a teacher and political scientist, have sought to similarly inspire my students into fulfilling their own academic potential. I am privileged to be able to work with students to kindle their own desires for knowledge and hope to help inspire them as my past teachers inspired me.';

const text_p2 = "In all classes I teach I aim to kindle student's impulses to independently think about and question the world around them.";

const text_p3 = 'Below are various links on some supplemental files on courses I teach. My teaching statement can be found here: Teaching Philosophy';

const teachings = [
  {
    title: 'Associate Instructor of Record',
    class: 'Introduction to Comparative Politics (Summer 2021)',
    information: [
      {
        text: 'Syllabus (link)',
        link: 'TBD'
      },
      {
        text: 'Sample Classroom Presentation',
        link: 'TBD'
      }
    ]
  }
];

class Teaching extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <Row>
          <p class="text-left">{text_p1}</p>
          <p class="text-left">{text_p2}</p>
          <p class="text-left">{text_p3}</p>
        </Row>
      </Container>
    );
  }
}

export default Teaching;
