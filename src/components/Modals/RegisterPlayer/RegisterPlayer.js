import React, { useEffect } from 'react';

import { Container, Row, Col, Modal, Button, Form, Image } from 'react-bootstrap';

import './RegisterPlayer.scss';

import defaultImage from '../PlayerModal/defaultImage.png';

import axios from 'axios';

const RegisterPlayer = ( {tournamentId, ...props } ) => {


    const [players, setPlayers] = React.useState([]);

    const [profileImage, setProfileImage] = React.useState(defaultImage);

    useEffect(() => {
        async function getPlayers() {
            try {
                const response = await axios({
                    method: 'get',
                    url: `http://127.0.0.1:3000/players/getPlayersNonSubscribed/${tournamentId}`
                });
                if ( response.status === 200 && response.data.status === 'success' ) {
                    setPlayers(response.data.players);
                }
            } catch (error) {
                console.error(error);
            }
        }
        if(!tournamentId) return;
        getPlayers();
    }, [tournamentId]);

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = event.target.elements;
        const playerId = formData.playerId.value;
        if(!playerId) {
            return alert("Please select a player");
        }
        const body = {
            playerId: parseInt(playerId),
            tournamentPlayingCategoryId: tournamentId, 
            seed: 1
        }

        try {
            const response = await axios.post(
                'http://127.0.0.1:3000/tournaments/registerPlayer',
                body,
                {withCredentials: true}
            );
            
            if ( response.status === 200 && response.data.status === 'success') {
                Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                        new Notification("Jugaddor registrado");
                    }
                });
                handleOnHide();
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleOnChange = (e) => {
        const indexSelected = e.target.selectedIndex;
        const optionSelected = e.target[indexSelected];
        const photoUrl = optionSelected.dataset.photoUrl;
        
        setProfileImage(photoUrl);
    }

    const handleOnHide = () => {
        props.onHide(); 
        setProfileImage(defaultImage);
    }

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton onHide={handleOnHide}>
                <Modal.Title className='modalTitle'>
                    Registrar Jugador
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form id='registerForm' onSubmit={handleSubmit}>
                        <Row className='mb-4 align justify-content-center'>
                            <Col xs={8} md={8} className='inputImage'>
                                <Form.Label className='inputLabel'>Jugador Nuevo</Form.Label>
                                <Image src={ profileImage } roundedCircle fluid/>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Select name='playerId' onChange={ (e) => handleOnChange(e) }>
                                    <option value=''></option>
                                    {players.map( (player, key) => 
                                        <option key={key} value={ player.id } data-photo-url = {player.photo_url}>
                                            { player.first_name + ' ' + player.last_name }
                                        </option>
                                    )}
                                </Form.Select>
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <Button form='registerForm' type='submit' variant="success">Registrar</Button>
                <Button variant="danger" onClick={handleOnHide}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );

}

export default RegisterPlayer;