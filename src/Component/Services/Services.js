import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Sericepro from '../Servicepro/Servicepro';

const Services = (props) => {
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch ('./fakedata.JSON')
        .then(res => res.json())
        .then (data => setCourses(data))
    },[])

    return (       
  
      <Container>
            <Row xs={1} md={2} className="g-4 mt-4"> 
        {
          courses.map(course => <Sericepro
            course = {course}
          ></Sericepro>)
        }
   </Row> 
      </Container>      
   
    );
};

export default Services;