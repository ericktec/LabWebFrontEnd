import React, { useState } from 'react';

import {
    Button,
    Form,
    Container,
    Row,
    Col
} from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';

import './Signup.scss';

import imageHeader from '../Login/background.jpg';

import axios from 'axios';

import PageTitle from '../../components/PageTitle/PageTitle';

const Signup = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [accessCode, setAccessCode] = useState('');
    const history = useHistory();

    const signUp = async () => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://127.0.0.1:3000/auth/signup',
                data: {
                    email: email,
                    password: password,
                    password2: confirmPassword,
                    name: fullName,
                    adminCode: accessCode
                }
            });
            console.log(response)
            if (response.status === 200 && response.data.status === 'Account created') {
                return history.push('/login');
            }
            throw response.data.status
        } catch (error) {
            console.log(error);
        }
    }
    const signUpHandler = () => {
        if (!fullName) {
            return alert('Introducir nombre valido');
        }
        if (!email) {
            return alert('Introducir email valido');
        }
        if (!password || password !== confirmPassword) {
            return alert('Contraseña invalida o no coinciden');
        }
        if (!accessCode) {
            return alert('Código de acceso se encuentra vacio');
        }
        signUp();
    }


    return (
        <Container fluid>
            <Row>
                <PageTitle title='Crear Cuenta'/>
            </Row>
            <Row>
                <img src={imageHeader} className='header-image' alt='img' />
            </Row>
            <Row className='px-5 mb-5'>
                <Form className='mt-5'>
                    <Form.Group className='mb-3'>
                        <Form.Label>Nombre completo</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Nombre completo'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)} />

                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Correo Electronico'
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

                    <Form.Group className='mb-3'>
                        <Form.Label>Confirmar Contraseña</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Confirmar Contraseña'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Codigo de acceso de administradores</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Codigo de acceso de admin'
                            value={accessCode}
                            onChange={(e) => setAccessCode(e.target.value)} />
                    </Form.Group>

                    <Row>
                        <Col className='container-button'>
                            <Button className='button-color mb-2' onClick={signUpHandler}>
                                Crear cuenta
                            </Button>
                            <Link to="/login">
                                Iniciar sesión
                            </Link>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>
    )

};

export default Signup;