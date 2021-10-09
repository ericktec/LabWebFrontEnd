import React, { useState } from 'react';

import {
    Button, 
    Form,
    Container,
    Row
} from 'react-bootstrap';

import './Login.scss';

import imageHeader from './background.jpg'


const Login = () => {

    const [email, setEmail] = useState( '' );
    const [password, setPassword] = useState( '' );

    const submitHandler = () => {
        if ( email && password ){
            window.alert( 'Submit' );
        } else {
            window.alert( 'Missing credentials' );
        }
    };

    return (
        
        <Container fluid>
           
            <Row>
                <img src={ imageHeader } className='header-image' alt='img'/>
            </Row>
            <Row className='px-5'>
                    <Form className='mt-5'>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control 
                                type='email' 
                                placeholder='Introduce correo' 
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
                        <Container className='container-button'>
                            <Row>
                                <Button onClick={ submitHandler } className='button-color'>
                                    Iniciar sesión
                                </Button>
                            </Row>
                        </Container>
                    </Form>
            </Row>
        </Container>
        
    )
};

export default Login;
