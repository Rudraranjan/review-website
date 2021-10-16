import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';


const Home = () => {
  
    return (
        <Container>
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://thumbs.dreamstime.com/b/programming-code-laptop-screen-office-background-d-illustration-software-developing-coding-technologies-concept-computer-181544429.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.softwarehow.com/wp-content/uploads/monitor-for-programming.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://miro.medium.com/max/800/1*e8ZtGAlTRLkThwD-EGw-Qg.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   
</Container>


 );
};

export default Home;