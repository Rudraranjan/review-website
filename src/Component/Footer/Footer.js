import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Container className="background-color">
            <Row>
             <Col className="color">This is the Footer of this Page</Col>
             <Col className="color">All Link Here</Col>
             </Row>
        </Container>
    );
};

export default Footer;