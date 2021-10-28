import React, { useState } from 'react';
import {
    Button,
    Form,
    Container,
    Row
} from 'react-bootstrap';
import './Login.scss';
import imageHeader from './background.jpg';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Login = ({ setLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const submitHandler = () => {
        if (email && password) {
            signIn(email, password);
        } else {
            window.alert('Missing credentials');
        }
    };

    const signIn = async (email, password) => {
        try {
            const response = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:3000/auth/login',
                data: {
                    email: email,
                    password: password
                },
                withCredentials: true
            });
            console.log(response);
            if (response.status === 200 && response.data.status === 'authorized') {
                console.log('success')
                localStorage.setItem('logIn', true);
                localStorage.setItem('userName', response.data.logIn.name);
                setLoggedIn({
                    signIn: true,
                    userInfo: {
                        userName: response.data.logIn.name
                    }
                });
                history.push('/dashboard')
            }

        } catch (error) {
            console.error(error.response);
        }
    }

    return (

        <Container fluid>
            <Row>
                <div className='fake-navbar'></div>
            </Row>
            <Row>
                <img src={imageHeader} className='header-image' alt='img' />
            </Row>
            <Row className='px-5'>
                <Form className='mt-5'>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Introduce correo'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Contraseña'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Container fluid className='container-button'>

                        <Row >
                            <Button onClick={submitHandler} className='button-color'>
                                Iniciar sesión
                            </Button>
                        </Row>
                        <Row className='align'>
                            <Link to="/signup">
                                Crear cuenta.
                            </Link>
                        </Row>
                    </Container>
                </Form>
            </Row>
        </Container>

    )
};

export default Login;
