import { loremIpsum } from 'react-lorem-ipsum';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Layout.css';

export const LayoutPage = () => (
  <>
    <Row className='py-2'>
      <Col className='column' md={12}>
        12
      </Col>
    </Row>
    <Row className='py-2'>
      <Col className='column' md={6} sm={12}>
        6 in desktop view, 12 in mobile view
      </Col>
      <Col className='column' md={6} sm={12}>
        6 in desktop view, 12 in mobile view
      </Col>
    </Row>
    <Row className='py-2'>
      <Col md={6} sm={12}>
        <img
          alt={'cat'}
          className='image'
          src={'https://i.pinimg.com/originals/c9/37/33/c937334e6b6781c3f494dda3064eb1e6.jpg'}
        />
      </Col>
      <Col md={6} sm={12}>
        <h1>Cute little cats!</h1>
        <p>{loremIpsum()}</p>
      </Col>
    </Row>
  </>
);