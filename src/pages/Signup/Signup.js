import React, { useState } from 'react';

import {
    Button, 
    Form, 
    Container,
    Row
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './Signup.scss';

import imageHeader from '../Login/background.jpg'

const Signup = () => {

    const [fullName, setFullName] = useState( '' );
    const [email, setEmail] = useState( '' );
    const [password, setPassword] = useState( '' );
    const [confirmPassword, setConfirmPassword] = useState( '' );

    return (
        <Container fluid>
            <Row>
                <div className='fake-navbar'></div>
            </Row>
            <Row>
                <img src={ imageHeader } className='header-image' alt='img'/>
            </Row>
            <Row className='px-5'>
                    <Form className='mt-5'> 
                    <Form.Group className='mb-3'>
                            <Form.Label>Nombre Completo</Form.Label>
                            <Form.Control 
                                type='text' 
                                placeholder='Nombre Completo' 
                                value={ fullName } 
                                onChange={ ( e ) => setFullName( e.target.value ) } />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control 
                                type='email' 
                                placeholder='Correo Electronico' 
                                value={ email } 
                                onChange={ ( e ) => setEmail( e.target.value ) } />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control 
                                type='password' 
                                placeholder='Contraseña' 
                                value={ password } 
                                onChange={ ( e ) => setPassword( e.target.value ) }/>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Confirmar Contraseña</Form.Label>
                            <Form.Control 
                                type='password' 
                                placeholder='Confirmar Contraseña' 
                                value={ confirmPassword } 
                                onChange={ ( e ) => setConfirmPassword( e.target.value ) }/>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Codigo de acceso de administradores</Form.Label>
                            <Form.Control 
                                type='password' 
                                placeholder='Codigo de acceso de admin' 
                                value={ confirmPassword } 
                                onChange={ ( e ) => setConfirmPassword( e.target.value ) }/>
                        </Form.Group>

                        <Container className='container-button'>
                            <Row>
                                <Button className='button-color' >
                                    Crear cuenta
                                </Button>
                            </Row>
                            <Row className='align'>
                                <Link to="/login">
                                    Iniciar sesión.
                                </Link>
                            </Row>
                        </Container>

                    </Form>
            </Row>
        </Container>
    )

};

export default Signup;