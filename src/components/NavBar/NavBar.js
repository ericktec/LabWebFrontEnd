import React from 'react';

import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';



import './NavBar.scss';


const NavBar = () => {

    return (
        <Navbar className='navbar-design sticky-top' expand="sm" >
            <Container>
                <Navbar.Brand className='text-light'></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className='text-light' href="/">Cerrar sesión</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;

