import React from 'react';
import {Navbar , Nav , NavbarBrand} from "react-bootstrap";

import Lofo from './Logo.png'
import Login from './Login';
import {LinkContainer} from 'react-router-bootstrap';
import {useHistory} from 'react-router-dom';
import TicketPage from './TicketPage';






const Header =()=>{
    
    return(
        <Navbar
        
        bg="success" 
        >
            <Navbar.Brand>
                <img src={Lofo} alt="logo" width="100px" height="75px"/>

            </Navbar.Brand>
             <Navbar.Toggle
             aria-controls="basic-navbar-nav"/>
             <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ml-auto" >
                     <LinkContainer exact to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                     <LinkContainer to="/admin"><Nav.Link>admin</Nav.Link></LinkContainer>
                     
                     <LinkContainer to="/Skin Care"><Nav.Link>skincare</Nav.Link></LinkContainer>
                      <LinkContainer to="/Color"><Nav.Link>Color</Nav.Link></LinkContainer>
                     <LinkContainer to="/Wellness"><Nav.Link>Wellness</Nav.Link></LinkContainer>
                     <LinkContainer to="/Query"><Nav.Link>Query</Nav.Link></LinkContainer>
                     
                     
                 </Nav>
             </Navbar.Collapse>

                   
             
        </Navbar>
    );
};
export default Header;
