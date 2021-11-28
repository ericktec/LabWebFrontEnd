import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button, Form, Image } from 'react-bootstrap';
import './PlayerModal.scss';
import axios from 'axios';

const PlayerModal = ( props ) => {

    const defaultImage = 'https://alfafafoods.com/wp-content/uploads/2020/10/PngJoy_gray-circle-login-user-icon-png-transparent-png_2750635-1.png';
    const [profileImage, setProfileImage] = useState(defaultImage);
    
    const onChangeProfileImage = (e) => {
        setProfileImage(e.target.value);
    }

    const handleOnHide = () => {
        props.onHide(); 
        setProfileImage(defaultImage);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = event.target.elements;
        

        const body = {
            firstName: formData.firstName.value,
            lastName: formData.lastName.value,
            gender: formData.gender.value,
            dateOfBirth: formData.dateOfBirth.value,
            photoUrl: formData.photoUrl.value || defaultImage
        }

        if ( body.firstName.split(' ').join('') !== '' && 
            body.lastName.split(' ').join('') !== '' && 
            body.gender.split(' ').join('') !== '' &&
            body.dateOfBirth 
            ) {
                console.log(body);        
                try {                    
                    const response = await axios.post(
                        'http://127.0.0.1:3000/players/newPlayer',
                        body,
                        {withCredentials: true}
                    );
                    if ( response.status === 200 && response.data.status === 'success') {
                        
                        Notification.requestPermission().then(function (permission) {
                            if (permission === "granted") {
                                new Notification(response.data.message);
                            }
                        });
                        handleOnHide();
                    }
                    console.log(response.data);
                    
                } catch ( error ) {
                    console.error(error);
                }  
        } else {
            window.alert('Campos invalidos')
        }
        
    }

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton onHide={handleOnHide}>
                <Modal.Title className='modalTitle'>
                    Nuevo Jugador
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form onSubmit={handleSubmit} id='userData'>
                        <Row className='mb-4 align justify-content-center'>
                            <Col xs={6} md={4} className='inputImage'>
                                <Form.Label className='inputLabel'>Imagen</Form.Label>
                                <Image src={ profileImage } onError={ () => setProfileImage(defaultImage) } roundedCircle fluid/>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Control name='photoUrl' placeholder='URL' onChange={onChangeProfileImage}/>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Nombre(s)</Form.Label>
                                <Form.Control name='firstName' placeholder="Nombre(s)" />
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Apellido</Form.Label>
                                <Form.Control name='lastName' placeholder="Apellido" />
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Fecha Nacimiento</Form.Label>
                                <Form.Control name='dateOfBirth' type='date' />
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Genero</Form.Label>
                                <div>
                                    <Form.Check inline label="Masculino" value='M' name="gender" type="radio" checked readOnly/>
                                    <Form.Check inline label="Femenino"  value = 'F' name="gender" type="radio" readOnly/>
                                </div>
                            </Col>
                        </Row>


                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <Button type='submit' form='userData' variant="success">Guardar</Button>
                <Button variant="danger" onClick={handleOnHide}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );

}

export default PlayerModal;