import React from 'react';

import {
    Container,
    Row,
    Button
} from 'react-bootstrap';

import './Home.scss';

import imageHeader from './background.jpeg'


const Home = () => {
    return (
        <Container fluid>
            <Row>
                <img src={ imageHeader } className='home-image' alt='img'/>
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




