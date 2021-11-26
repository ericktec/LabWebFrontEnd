import React from 'react';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import './TournamentModal.scss';
const TournamentModal = ( props ) => {

    const title = props.title;
    const modal = props.modal;
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Modal
            {...props}
            size="lg"
            onHide={() => setModalShow(false)}
            centered
        >
            <Modal.Header>
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

                        <Row>
                            <Col>
                                <Form.Label className='inputLabel'>Número de Participantes</Form.Label>
                                <Form.Control type="number" placeholder="Nombre Torneo" />
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