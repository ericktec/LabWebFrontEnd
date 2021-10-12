import React from 'react';

import {
    Container,
    Row,
    Button
} from 'react-bootstrap';

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
                <Row>
                    <Button className='button-color'>
                        Iniciar sesión
                    </Button>
                </Row>
                <Row>
                    <Button className='button-color'>
                        Continuar sin sesión
                    </Button>
                </Row>

            </Container>

        </Container>
    )
};

export default Home;




