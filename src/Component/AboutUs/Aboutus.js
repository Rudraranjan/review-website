import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const Aboutus = () => {
    return (
        <Container>
        <Row>
         <Col>
             <img src="https://cdn.dribbble.com/users/241205/screenshots/15994730/media/b52c5e770d9c53f5c07311c003577b5b.png?compress=1&resize=400x300" alt="" />
         </Col>
         <Col className="color-font">
             <h4>So you’re interested in getting into the online course, but are unsure where to start? We get it—the COVID-19 pandemic has seen an unprecedented rise in elearning. It’s only natural that you want to get in on the action.</h4>
             <h4>But, like any business, you can’t just up and start an online course without an idea. Preferably, that idea will be one that you know works, and that will provide a nice steady income for good measure.</h4>
             <h4>With that in mind, we’ve put together a colossal list of one hundred and ten online course ideas to give you inspiration. They’re split into industries and accompanied by a real-life success story to give you further context.</h4>
         </Col>
         </Row>
    </Container>
    );
};

export default Aboutus;