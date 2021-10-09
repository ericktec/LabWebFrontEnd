import React, { useState } from 'react';

import {
    Button, 
    Form, 
    Card,
    Container,
    Row
} from 'react-bootstrap';

import './Login.scss';


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
        <Container className='login-card'>
            <Row>
                <Card className='pb-2 pt-2 mt-5'>
                    <Form>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Email address or username</Form.Label>
                            <Form.Control 
                                type='email' 
                                placeholder='Enter email or user' 
                                value={ email } 
                                onChange={ ( e ) => setEmail( e.target.value ) } />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type='password' 
                                placeholder='Password' 
                                value={ password } 
                                onChange={ ( e ) => setPassword( e.target.value ) }/>
                        </Form.Group>
                        <Button variant='primary' onClick={ submitHandler }>
                            Login
                        </Button>
                    </Form>
                </Card>
            </Row>
        </Container>
    )
};

export default Login;