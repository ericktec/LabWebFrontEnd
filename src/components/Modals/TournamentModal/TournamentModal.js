import React from 'react';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import './TournamentModal.scss';
import axios from 'axios';
const TournamentModal = ( props ) => {

    const [modalShow, setModalShow] = React.useState(false);

    const defaultImage = 'https://i2.wp.com/matchtenis.com/wp-content/uploads/2019/04/Cesped-2.jpg?resize=660%2C330&ssl=1';

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = event.target.elements;

        const body = {
            tournamentName: formData.tournamentName.value,
            location: formData.location.value,
            startDate: formData.startDate.value,
            endDate: formData.endDate.value,
            numberOfRounds: parseInt(formData.numberOfRounds.value),
            tournamentTypeId: parseInt(formData.tournamentTypeId.value),
            surfaceTypeId: parseInt(formData.surfaceTypeId.value),
            playingCategoryId: parseInt(formData.playingCategoryId.value),
            tournamentPhoto: formData.tournamentPhoto.value || defaultImage
        }

        try {
            const response = await axios.post(
                'http://127.0.0.1:3000/tournaments/createTournament',
                body,
                {withCredentials: true}
            );
            if ( response.status === 200 && response.data.status === 'success') {
                
                Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                        new Notification("Torneo registrado con éxito");
                    }
                });
                props.onHide();
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    }

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
                    <Form onSubmit={handleSubmit} id='tournamentData'>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Nombre del Torneo</Form.Label>
                                <Form.Control name='tournamentName' placeholder="Nombre Torneo" required/>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Lugar del Torneo</Form.Label>
                                <Form.Control name='location' placeholder="Lugar Torneo" required/>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Número de Rondas</Form.Label>
                                <Form.Control name='numberOfRounds' type="number" required/>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Tipo de Torneo</Form.Label>
                                <Form.Select name='tournamentTypeId' required>
                                    <option value="">Selecciona un tipo</option>
                                    <option value="1">Grand slam</option>  
                                    <option value="2">Nacional</option>
                                    <option value="3">Intercampus</option>
                                    <option value="4">Colegial</option>
                                    <option value="5">Club</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Tipo de Superficie</Form.Label>
                                <Form.Select name='surfaceTypeId' required>
                                    <option value="">Selecciona superficie</option>
                                    <option value="1">Césped</option>  
                                    <option value="2">Arcilla</option>
                                    <option value="3">Dura</option>
                                    <option value="4">Alfombra</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Categoría</Form.Label>
                                <Form.Select name='playingCategoryId' required>
                                    <option value="">Selecciona una categoria</option>
                                    <option value="1">Individual masculino</option>  
                                    <option value="2">Individual femenino</option>
                                    <option value="3">Individual mixto</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col xs={6}>
                                <Form.Label className='inputLabel'>Fecha Inicio</Form.Label>
                                <Form.Control name='startDate' type='date' required/>
                            </Col>
                            <Col xs={6}>
                                <Form.Label className='inputLabel'>Fecha Fin</Form.Label>
                                <Form.Control name='endDate' type='date' required/>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>URL Foto</Form.Label>
                                <Form.Control name='tournamentPhoto' placeholder='URL' required/>
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <Button type='submit' form='tournamentData' variant="success">Guardar</Button>
                <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );

}

export default TournamentModal;