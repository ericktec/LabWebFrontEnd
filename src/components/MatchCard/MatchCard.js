import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import './MatchCard.scss';


const MatchCard = ( { round, player1, player2, imagePlayer1, imagePlayer2, score } ) => {

  
    let scorePlayer1 = '';
    let totalScorePlayer1 = 0;
    let scorePlayer2 = '';
    let totalScorePlayer2 = 0;
    score.forEach( element => {
        totalScorePlayer1 += element.first_registration_games;
        totalScorePlayer2 += element.second_registration_games;
        scorePlayer1 += element.first_registration_games + ' ';
        scorePlayer2 += element.second_registration_games + ' ';
    } );


    return (
        <Row className='px-5 pt-4'>
            <Card className='card-color rounded-0 shadow-sm'>
                <Card.Body>
                    <Container className='p-0'>
                        <Row>
                            <Col className='text-left'>
                                <Card.Text> Ronda { round } </Card.Text>
                            </Col>
                        </Row>
                        <Row className='py-4'>
                            <Col xs={2} md={1} className='mx-1'>
                                <Image className='image-size' src={ imagePlayer1 } roundedCircle />
                            </Col>
                            <Col className='text-align-player text-left'>
                                <Card.Text > { player1 } </Card.Text>
                            </Col>
                            <Col className='text-align-player text-right'>
                                {
                                    totalScorePlayer1 > totalScorePlayer2 ? 
                                    <div className='arrowIcon'></div> : ''
                                }
                                <Card.Text > { scorePlayer1 } </Card.Text>
                                
                            </Col>
                            
                        </Row>
                        
                        <Row>
                            <Col xs={2} md={1} className='mx-1'>
                                <Image className='image-size' src={ imagePlayer2 } roundedCircle />
                            </Col>
                            <Col className='text-align-player text-left'>
                                <Card.Text > { player2 } </Card.Text>
                            </Col>
                            <Col className='text-align-player text-right'>
                                {
                                    totalScorePlayer1 < totalScorePlayer2 ? 
                                    <div className='arrowIcon'></div> : ''
                                }
                                <Card.Text > { scorePlayer2 } </Card.Text>
                                
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Row>
    );
};

export default MatchCard;