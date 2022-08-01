import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const title = 'Teaching';

// TODO: add links to the text

class Teaching extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <div title="content" class="text-left">
          <p>
            In my years of schooling, I have been blessed with many amazing teachers that inspired me and solidified my intellectual motivations to
            continue investigating the world around me. Across many different discipline, pedagogues and personalities, these teachers and professors
            guided me toward my own approach to teaching. As a teacher and political scientist, have sought to similarly inspire my students into
            fulfilling their own academic potential. I am privileged to be able to work with students to kindle their own desires for knowledge
            and hope to help inspire them as my past teachers inspired me.
          </p>
          <p>
            In all classes I teach I aim to kindle student's impulses to independently think about and question the world around them.
          </p>
          <p>
            Below are various links on some supplemental files on courses I teach. My teaching statement can be found here: Teaching Philosophy
          </p>
          <br></br>
          <h3>Associate Instructor of Record</h3>
          <ul>
            <li>Introduction to Comparative Politics (Summer 2021)</li>
            <ul>
              <li>Syllabus (link)</li>
              <li>Sample Classroom Presentation</li>
            </ul>
          </ul>
          <h3>Discussion Section Instructor</h3>
          <ul>
            <li>POL 144A Eastern European Politics (Spring 2021)</li>
            <ul>
              <li>Section Syllabus</li>
              <li>Assignment Calendar</li>
              <li>Sample Presentation</li>
            </ul>
          </ul>
          <ul>
            <li>POL 144A Eastern European Politics (Winter 2022)</li>
            <ul>
              <li>Section Syllabus</li>
              <li>Assignment Calendar</li>
              <li>Sample Presentation</li>
              <li>Guest Lecture Presentation</li>
            </ul>
          </ul>
          <h3>Discussion Section Teaching Assistant</h3>
          <ul>
            <li>Introduction to Comparative Politics</li>
            <ul>
              <li>Professor Josephine Andrews</li>
              <ul>
                <li>Fall 2019</li>
                <li>Winter 2021</li>
                <li>Fall 2021</li>
                <ul>
                  <li>Sample Presentation</li>
                  <li>Section Syllabus</li>
                </ul>
              </ul>
            </ul>
            <ul>
              <li>Associate Instructor Isaac Hale</li>
              <ul>
                <li>Fall 2020</li>
                <ul>
                  <li>Section Syllabus</li>
                </ul>
              </ul>
            </ul>
          </ul>
        </div>
      </Container>
    );
  }
}

export default Teaching;
