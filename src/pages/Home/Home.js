import React from 'react';

import {
    Container,
    Row,
    Button
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './Home.scss';

import imageHeader from './background.jpeg';
import imageHeaderLarge from './backgroun-large.jpg';


const Home = () => {
    return (
        <Container fluid>

            <Row className='phone-header'>
                <img src={imageHeader} className='phone-header-sm' alt='img' />
            </Row>

            <Row>
                <img src={imageHeaderLarge} className='desktop-header-lg' alt='img' />
            </Row>

            <Container className='home-buttons'>
                <Row className='align'>
                    <Link to='/login' >
                        <Button className='button-color'>
                            INICIAR SESIÓN
                        </Button>
                    </Link>
                </Row>
                <Row className='align'>
                    <Link to='/login'>
                        <Button className='button-color'>
                            CONTINUAR SIN INICIAR SESIÓN
                        </Button>
                    </Link>
                </Row>

            </Container>

        </Container>
    )
};

export default Home;




