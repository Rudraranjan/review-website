
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Contactus = () => {
    return (
        <Container>
             <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Your Name</Form.Label>
             <Form.Control type="email" placeholder="Enter Your Name" />
             </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Your Address</Form.Label>
             <Form.Control type="email" placeholder="Enter Your Address" />
             </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Phone Number</Form.Label>
             <Form.Control type="email" placeholder="Enter Your Phone Number" />
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" placeholder="name@example.com" />
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Your Favorite Course Name</Form.Label>
                 <Form.Control type="email" placeholder="Enter Course Name" />
             </Form.Group>
               
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example Textarea</Form.Label>
                 <Form.Control as="textarea" rows={3} />
             </Form.Group>
        </Form>
        <Button variant="primary" className="m-3">Submit Your Details Here</Button>{' '}
        </Container>       
    );
};

export default Contactus;