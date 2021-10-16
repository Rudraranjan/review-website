import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://solutionsreview.com/business-process-management/files/2020/06/TrackVia-Announces-New-Design-for-Low-Code-Platform.jpg"
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