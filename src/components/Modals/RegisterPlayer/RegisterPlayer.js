import React from 'react';

import { Container, Row, Col, Modal, Button, Form, Image } from 'react-bootstrap';

import './RegisterPlayer.scss';

import defaultImage from '../PlayerModal/defaultImage.png';

const RegisterPlayer = ( props ) => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton onHide={() => setModalShow(!modalShow)}>
                <Modal.Title className='modalTitle'>
                    Registrar Jugador
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form>
                        <Row className='mb-4 align justify-content-center'>
                            <Col xs={8} md={8} className='inputImage'>
                                <Form.Label className='inputLabel'>Jugador Nuevo</Form.Label>
                                <Image src={ defaultImage } roundedCircle fluid/>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Select>
                                    <option>Seleccionar Jugador</option>
                                    <option value="1">Fabian Ramirez</option>  
                                    <option value="2">Erick Mendoza</option>
                                    <option value="3">Framezqu</option>
                                </Form.Select>
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <Button variant="success">Registrar</Button>
                <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );

}

export default RegisterPlayer;