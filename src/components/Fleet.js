import React from 'react';
import Header from './Header';
import '../styles/Fleet.scss';
import { Row, Container, Col } from 'react-bootstrap';

const Fleet = () => {
  return (
    <div className='fleet'>
      <Header />
      <div className='fleetbanner'>
        <div className='bannerbg'>
          <h1>
             Our Fleet
          </h1>
        </div>
      </div>

      <div>
        <Container>
            <Row>
              <Col></Col>
              <Col></Col>
            </Row>

            <Row>
              <Col></Col>
              <Col></Col>
            </Row>

            <Row>
              <Col></Col>
              <Col></Col>
            </Row>

            <Row>
              <Col></Col>
              <Col></Col>
            </Row>

            <Row>
              <Col></Col>
              <Col></Col>
            </Row>

            <Row>
              <Col></Col>
              <Col></Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default Fleet