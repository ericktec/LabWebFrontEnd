import React from 'react';
import { Container, Row, Col, Modal, Button, Form, Image } from 'react-bootstrap';
import './MatchModal.scss';
import defaultImage from '../PlayerModal/defaultImage.png';
const MatchModal = ( props ) => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton onHide={() => setModalShow(!modalShow)}>
                <Modal.Title className='modalTitle'>
                    Nuevo Partido
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form>

                        {/* Jugador 1 */}
                        <Row className='mb-4 align justify-content-center'>
                            <Col xs={6} md={4} className='inputImage'>
                                <Form.Label className='inputLabel'>Jugador 1</Form.Label>
                                <Image src={ defaultImage } roundedCircle fluid/>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Select>
                                    <option>Open this select menu</option>
                                    <option value="1">Fabian Ramirez</option>  
                                    <option value="2">Erick Mendoza</option>
                                    <option value="3">Framezqu</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        {/* Jugador 2 */}
                        <Row className='mb-4 align justify-content-center'>
                            <Col xs={6} md={4} className='inputImage'>
                                <Form.Label className='inputLabel'>Jugador 2</Form.Label>
                                <Image src={ defaultImage } roundedCircle fluid/>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Select>
                                    <option>Open this select menu</option>
                                    <option value="1">Fabian Ramirez</option>  
                                    <option value="2">Erick Mendoza</option>
                                    <option value="3">Framezqu</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Fase</Form.Label>
                                <Form.Select>
                                    <option>Open this select menu</option>
                                    <option value="1">Octavos</option> 
                                    <option value="2">Cuartos</option> 
                                    <option value="3">Semi-final</option>
                                    <option value="4">Final</option>
                                </Form.Select>
                            </Col>
                        </Row>


                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <Button variant="success">Guardar</Button>
                <Button variant="danger" onClick={(props.onHide)}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );

}

export default MatchModal;