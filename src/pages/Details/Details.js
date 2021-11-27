import React from "react";

import './Details.scss';

import { Container, Row, Col, Image, Card } from "react-bootstrap";

import PageTitle from '../../components/PageTitle/PageTitle';

import { useLocation } from 'react-router-dom';

const Details = ( props ) => {

    const location = useLocation();


    const playerName1 = location.state.player_one_details.first_name + ' ' + location.state.player_one_details.last_name;
    const photoUrlPlayer1 = location.state.player_one_details.photo_url;
    const playerName2 = location.state.player_two_details.first_name + ' ' + location.state.player_two_details.last_name;
    const photoUrlPlayer2 = location.state.player_two_details.photo_url;
    const round = 'Ronda ' + location.state.round;
    const score = location.state.sets;

    return (
        <div>
            <PageTitle title='Detalles' />

            <Container className='mt-2 w-75' fluid >
                <Row className='align'>
                    <Col>
                        <Image className='player-image' src={ photoUrlPlayer1 } roundedCircle />
                    </Col>
                    <Col>
                        <Image className='player-image' src={ photoUrlPlayer2 } roundedCircle />
                    </Col>
                </Row>
                <Row className='align mt-3'>
                    <Col>
                        <Card.Text>
                            { playerName1 }
                        </Card.Text>
                    </Col>
                    <Col>
                        <Card.Text>
                            { playerName2 }
                        </Card.Text>
                    </Col>
                </Row>
                <Row className='align mt-3'>
                    <p className='bold'>
                        <b>
                            VS
                        </b>
                    </p>
                </Row>

                <Row >
                    <Card className='d-flex flex-column align p-4 card-color rounded-0 shadow-sm'>
                        <Row className='mb-3'>
                            <Col className='text-left'>
                                <Card.Text> { round } </Card.Text>
                            </Col>
                            <Col className='text-right'>
                                <Card.Text className="text-muted"> Dura </Card.Text>
                            </Col>
                        </Row>
                        { score.map( set => {

                            return (
                                <Row className='mb-3' key={ set.set_number }>
                                    <Col className='font-weight-bold'> {set.first_registration_games} </Col>
                                    <Col xs={6} md={6}>
                                        <Card.Text > Set {set.set_number+1}  </Card.Text>
                                    </Col>
                                    <Col className='text-muted'> {set.second_registration_games} </Col>
                                </Row>
                            )

                        } ) }
                        
                        

                    </Card>
                </Row>
            </Container>

            
            
        </div>
    );
};

export default Details;