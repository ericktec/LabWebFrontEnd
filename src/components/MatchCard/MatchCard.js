import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import './MatchCard.scss';

const MatchCard = ( props ) => {

    const round = props.round;
    const place = props.place;
    const player1 = props.player1;
    const imagePlayer1 = props.imagePlayer1;
    const player2 = props.player2;
    const imagePlayer2 = props.imagePlayer2;
    const score = props.score;
    const scorePlayer1 = `${score.firstSet[0]}   ${score.secondSet[0]}   ${score.thirdSet[0]}`; 
    const scorePlayer2 = `${score.firstSet[1]}   ${score.secondSet[1]}   ${score.thirdSet[1]}`; 

    return (
        <Row className='px-5 pt-4'>
            <Card className='card-color rounded-0 shadow-sm' >
                <Card.Body>
                    <Container className='p-0'>
                        <Row>
                            <Col className='text-left'>
                                <Card.Text> { round } </Card.Text>
                            </Col>
                            <Col className='text-right'>
                                <Card.Text className="text-muted"> { place } </Card.Text>
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