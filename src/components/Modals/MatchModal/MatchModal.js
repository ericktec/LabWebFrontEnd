import React, { useEffect } from 'react';
import { Container, Row, Col, Modal, Button, Form, Image } from 'react-bootstrap';
import './MatchModal.scss';
import defaultImage from '../PlayerModal/defaultImage.png';
import axios from 'axios';

const MatchModal = ( { tournamentId, numRounds, setNewMatch, ...props} ) => {

    const [numSets, setNumSets] = React.useState();

    const [profileImageJ1, setProfileImageJ1] = React.useState(defaultImage);
    
    const [profileImageJ2, setProfileImageJ2] = React.useState(defaultImage);

    const [players, setPlayers] = React.useState([]);

    useEffect(() => {
        async function getTournamentPlayers() {
            try {
                const response = await axios({
                    method: 'get',
                    url: `http://127.0.0.1:3000/tournaments/getPlayers/${tournamentId}`
                });
                if ( response.status === 200 && response.data.status === 'success' ) {
                    setPlayers(response.data.players);
                }
            } catch (error) {
                console.error(error);
            }
        }
        if(!tournamentId) return;
        getTournamentPlayers();
    }, [tournamentId]);

    const handleOnChange = (e) => {
        const indexSelected = e.target.selectedIndex;
        const optionSelected = e.target[indexSelected];
        const photoUrl = optionSelected.dataset.photoUrl;
        if (e.target.name === 'firstRegistrationId') {
            setProfileImageJ1(photoUrl)
        }
        else if (e.target.name === 'secondRegistrationId') {
            setProfileImageJ2(photoUrl)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = e.target.elements;
        const scorePlayer1 = new Array(numSets);
        const scorePlayer2 = new Array(numSets);
        let setsWinPlayer1 = 0;
        let setsWinPlayer2 = 0;
        for(let i = 0; i<numSets; i++) {
            scorePlayer1[i] = parseInt(formData[`set${i}Score${1}`].value);
            scorePlayer2[i] = parseInt(formData[`set${i}Score${2}`].value);
            scorePlayer1[i] > scorePlayer2[i] ? setsWinPlayer1++:setsWinPlayer2++;
        }
        const body = {
            tournamentPlayingCategoryId: tournamentId,
            firstRegistrationId: parseInt(formData.firstRegistrationId.value),
            secondRegistrationId: parseInt(formData.secondRegistrationId.value),
            round: parseInt(formData.round.value),
            numberOfSetsPlayed: parseInt(formData.numberOfSetsPlayed.value),
            setsPlayer1: scorePlayer1,
            setsPlayer2: scorePlayer2,
            winnerRegistrationId: parseInt(setsWinPlayer1>setsWinPlayer2 ? formData.firstRegistrationId.value : formData.secondRegistrationId.value)
        }

        try {
            const response =  await axios.post(
                `http://127.0.0.1:3000/games/registerGame`,
                body,
                {withCredentials: true}
            );
            console.log(response);
            if(response.status === 200 && response.data.status === 'success') {
                Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                        new Notification('Juego registrado exitosamente');
                    }
                    handleOnHide();
                    // window.location.reload();
                    setNewMatch(1);
                    setNewMatch(0);
                });
            }
            
        } catch (error) {
            console.error(error);
        }
        
        console.log(body);
        
    }

    const handleOnHide = () => {
        props.onHide(); 
        setProfileImageJ1(defaultImage);
        setProfileImageJ2(defaultImage);
        setNumSets(0);
    }


    const createRounds = () => {
        let items = [];
        for ( let r = 1; r <= numRounds; r++ ){
            items.push(<option key={r} value={r}>{ r }</option>); 
        }

        return items;
    }

    let inputSets = [];
    for ( let i = 0; i < numSets; i++){
        inputSets.push(
            <Row className='mb-4 align' key={ i }>
                <Col xs={3} md={3}>
                    <Form.Control name={`set${i}Score${1}`} type='number' min='0' max='7' placeholder="J1" />
                </Col>
                <Col xs={6} md={6}>
                    <Form.Label className='inputLabel'> SET { i + 1 } </Form.Label>
                </Col>
                <Col xs={3} md={3}>
                    <Form.Control name={`set${i}Score${2}`} type='number' min='0' max='7' placeholder="J2" />
                </Col>
            </Row>
        ) 
    }

    

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton onHide={handleOnHide}>
                <Modal.Title className='modalTitle'>
                    Nuevo Partido
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form onSubmit={handleSubmit} id="gameForm">

                        {/* Jugador 1 */}
                        <Row className='mb-4 align justify-content-center'>
                            <Col xs={6} md={4} className='inputImage'>
                                <Form.Label className='inputLabel'>Jugador 1</Form.Label>
                                <Image src={ profileImageJ1 } roundedCircle fluid/>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Select name="firstRegistrationId" onChange={handleOnChange} required>
                                    <option value=''></option>
                                    {players.map( (player, key) => 
                                        <option key={key} value={ player.registration_id } data-photo-url = {player.photo_url}>
                                            { player.first_name + ' ' + player.last_name }
                                        </option>
                                    )}
                                </Form.Select>
                            </Col>
                        </Row>

                        {/* Jugador 2 */}
                        <Row className='mb-4 align justify-content-center'>
                            <Col xs={6} md={4} className='inputImage'>
                                <Form.Label className='inputLabel'>Jugador 2</Form.Label>
                                <Image src={ profileImageJ2 } roundedCircle fluid/>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Select name='secondRegistrationId' onChange={handleOnChange} required>
                                    <option value=''></option>
                                    {players.map( (player, key) => 
                                        <option key={key} value={ player.registration_id } data-photo-url = {player.photo_url}>
                                            { player.first_name + ' ' + player.last_name }
                                        </option>
                                    )}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Fase</Form.Label>
                                <Form.Select name='round' defaultValue='' required>
                                    <option value='' disabled>Selecciona la fase</option>
                                    {createRounds()}
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                                <Form.Label className='inputLabel'>Número de Sets</Form.Label>
                                <Form.Select name='numberOfSetsPlayed' defaultValue='' onChange={(e) => setNumSets(e.target.value)}>
                                    <option value='' disabled>Seleccione los sets</option>
                                    <option value='2'>2</option> 
                                    <option value='3'>3</option> 
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        {inputSets.length ? inputSets.map(set => set) : '*Por favor introduce el número de sets'}
                        
                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <Button form='gameForm' type='submit' variant="success">Guardar</Button>
                <Button variant="danger" onClick={handleOnHide}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );

}

export default MatchModal;