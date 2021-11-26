import React from 'react';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import './TournamentModal.scss';
const TournamentModal = ( props ) => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton onHide={() => setModalShow(!modalShow)}>
                <Modal.Title className='modalTitle'>
                    Nuevo Torneo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Nombre del Torneo</Form.Label>
                                <Form.Control placeholder="Nombre Torneo" />
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Lugar del Torneo</Form.Label>
                                <Form.Control placeholder="Lugar Torneo" />
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Número de Rondas</Form.Label>
                                <Form.Control type="number" />
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Tipo de Torneo</Form.Label>
                                <Form.Select>
                                    <option>Open this select menu</option>
                                    <option value="1">Grand slam</option>  
                                    <option value="2">Nacional</option>
                                    <option value="3">Intercampus</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Tipo de Superficie</Form.Label>
                                <Form.Select>
                                    <option>Open this select menu</option>
                                    <option value="1">Césped</option>  
                                    <option value="2">Arcilla</option>
                                    <option value="3">Alfombra</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Categoría</Form.Label>
                                <Form.Select>
                                    <option>Open this select menu</option>
                                    <option value="1">ndividual masculino</option>  
                                    <option value="2">Individual femenino</option>
                                    <option value="3">Individual mixto</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col xs={6}>
                                <Form.Label className='inputLabel'>Fecha Inicio</Form.Label>
                                <Form.Control type='date' />
                            </Col>
                            <Col xs={6}>
                                <Form.Label className='inputLabel'>Fecha Fin</Form.Label>
                                <Form.Control type='date' />
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>URL Foto</Form.Label>
                                <Form.Control placeholder='URL' />
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <Button variant="success">Guardar</Button>
                <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );

}

export default TournamentModal;