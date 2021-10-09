import React, { useState } from 'react';

import {
    Button, 
    Form, 
    Card,
    Container,
    Row
} from 'react-bootstrap';

import './Signup.scss';

const Signup = () => {

    const [fullName, setFullName] = useState( '' );
    const [email, setEmail] = useState( '' );
    const [username, setUsername] = useState( '' );
    const [password, setPassword] = useState( '' );
    const [confirmPassword, setConfirmPassword] = useState( '' );

    return (
        <Container className='signup-card'>
            <Row>
                <Card className='pb-2 pt-2 mt-5'>
                    <Form>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control 
                                type='text' 
                                placeholder='Full Name' 
                                value={ fullName } 
                                onChange={ ( e ) => setFullName( e.target.value ) } />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type='email' 
                                placeholder='Email' 
                                value={ email } 
                                onChange={ ( e ) => setEmail( e.target.value ) } />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type='text' 
                                placeholder='Username' 
                                value={ username } 
                                onChange={ ( e ) => setUsername( e.target.value ) } />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type='password' 
                                placeholder='Password' 
                                value={ password } 
                                onChange={ ( e ) => setPassword( e.target.value ) }/>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type='password' 
                                placeholder='Confirm Password' 
                                value={ confirmPassword } 
                                onChange={ ( e ) => setConfirmPassword( e.target.value ) }/>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Access Code for admins</Form.Label>
                            <Form.Control 
                                type='password' 
                                placeholder='Enter the given code for admin access' 
                                value={ confirmPassword } 
                                onChange={ ( e ) => setConfirmPassword( e.target.value ) }/>
                        </Form.Group>

                        <Button variant='primary' >
                            Sign up
                        </Button>
                    </Form>
                </Card>
            </Row>
        </Container>
    )

};

export default Signup;