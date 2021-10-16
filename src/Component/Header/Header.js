import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';



const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <LinkContainer to="/home"> 
             <Navbar.Brand >Easy Coding</Navbar.Brand>  
            </LinkContainer> 
         
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">  
            <LinkContainer to="/home">       
             <Nav.Link>Home</Nav.Link>
            </LinkContainer>            
            <LinkContainer to="/services">       
             <Nav.Link>Services</Nav.Link>
            </LinkContainer>            
            <LinkContainer to="/aboutus">       
             <Nav.Link>About Us</Nav.Link>
            </LinkContainer>           
            <LinkContainer to="/contactus">       
             <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>                       
        </Nav>
             </Navbar.Collapse>
             
        </Container>        
        </Navbar>
        
       

    );
};

export default Header;