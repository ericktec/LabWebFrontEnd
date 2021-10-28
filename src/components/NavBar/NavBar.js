import React from 'react';

import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';

import './NavBar.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const NavBar = ({ loggedIn, setLoggedIn }) => {
    const history = useHistory();
    const logOutHandler = async () => {
        try {
            const response = await axios({
                method: 'DELETE',
                url: 'http://127.0.0.1:3000/auth/logout',
                withCredentials: true
            });
            if (response.data.status === 'log out successfully') {
                setLoggedIn({
                    signIn: false,
                    userInfo: {
                        userName: ''
                    }
                });
                localStorage.setItem('logIn', false);
                localStorage.setItem('userName', '');
                history.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Navbar className='navbar-design sticky-top' expand="sm" >
            <Container>
                <Navbar.Brand className='text-light'></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {loggedIn.signIn && <button onClick={logOutHandler}>Cerrar sesión</button>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;

