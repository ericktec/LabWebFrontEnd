import React from 'react';

import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';



import './NavBar.scss';


const NavBar = () => {

    return (
        <Navbar className='navbar-design' expand="lg" >
            <Container>
                <Navbar.Brand className='text-light'>Tennis Tournament</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className='text-light' href="/dashboard">Inicio</Nav.Link> 
                    <Nav.Link className='text-light' href="/login">Iniciar sesión</Nav.Link> 
                    <Nav.Link className='text-light' href="/signup">Crear cuenta</Nav.Link> 
                    <Nav.Link className='text-light' href="/">Sign out</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;

