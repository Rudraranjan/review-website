import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Homepro = (props) => {
    const {course, img, duration, designby} = props.course;

    return (
    
        <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{course}</Card.Title>
          <Card.Text>
           <h4>Duration : {duration}</h4>
            <h5>Design By : {designby}</h5>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Homepro;