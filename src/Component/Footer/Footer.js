import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Container className="background-color">
            <Row>
             <Col className="color">
                 <h4>Best Learning Platfrom for Your Coding Skills</h4>
                 <h4>Thank your for chossing us</h4>
             </Col>
             <Col className="color">
                 <h4>Copyright &copy; Rudraranjan Thakur</h4>
             </Col>
             </Row>
        </Container>
    );
};

export default Footer;