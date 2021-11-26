import React from 'react';
import { Container, Row, Col, Modal, Button, Form, Image } from 'react-bootstrap';
import './PlayerModal.scss';
import defaultImage from './defaultImage.png';
const PlayerModal = ( props ) => {

    const [modalShow, setModalShow] = React.useState(false);
    const [profileImage, setProfileImage] = React.useState(defaultImage);

    const onChangeProfileImage = (e) => {
        setProfileImage(e.target.value);
    }

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton onHide={() => setModalShow(!modalShow)}>
                <Modal.Title className='modalTitle'>
                    Nuevo Jugador
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form>
                        <Row className='mb-4 align justify-content-center'>
                            <Col xs={6} md={4} className='inputImage'>
                                <Form.Label className='inputLabel'>Imagen</Form.Label>
                                <Image src={ profileImage } onError={ () => setProfileImage(defaultImage) } roundedCircle fluid/>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Control placeholder='URL' onChange={onChangeProfileImage}/>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Nombre(s)</Form.Label>
                                <Form.Control placeholder="Nombre(s)" />
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Apellido</Form.Label>
                                <Form.Control placeholder="Apellido" />
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Fecha Nacimiento</Form.Label>
                                <Form.Control type='date' />
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Genero</Form.Label>
                                <div>
                                    <Form.Check inline label="Masculino" name="group1" type="radio"/>
                                    <Form.Check inline label="Femenino" name="group1" type="radio"/>
                                </div>
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

export default PlayerModal;