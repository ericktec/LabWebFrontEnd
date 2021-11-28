import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import editIcon from './editIcon.png';
import logOutIcon from './logOutIcon.png';
import './PageTitle.scss';
import addPlayer from './addPlayer.png';
import backIcon from './backIcon.png';
import TournamentModal from '../Modals/TournamentModal/TournamentModal';
import PlayerModal from '../Modals/PlayerModal/PlayerModal';
import MatchModal from '../Modals/MatchModal/MatchModal';

import RegisterPlayerModal from '../Modals/RegisterPlayer/RegisterPlayer';

import { useHistory } from 'react-router-dom';
import axios from 'axios';

const PageTitle = ( props ) => {

    const title = props.title;
    const tournamentId = props.tournamentId;
    const numRounds = props.numRounds;
    const setNewMatch = props.setNewMatch;
    const setNewPlayer = props.setNewPlayer;
    console.log(title)

    const [torneoModal, setTorneoModal] = React.useState(false);
    const [playerModal, setPlayerModal] = React.useState(false);
    const [matchModal, setMatchModal] = React.useState(false);
    const [registerModal, setRegisterModal] = React.useState(false);

    const history = useHistory();

    const logOut = async () => {
        const response = await axios.delete(`http://127.0.0.1:3000/auth/logout`);
        console.log(response);
        if(response.status === 200 && response.data.status === 'success') {
            document.cookie = "userId=val; expires= Thu, 21 Aug 2014 20:00:00 UTC"
            history.push('/');
        }
    }

    const selectModal = () => {
        if ( title === 'Torneos' ) {
            setTorneoModal(true);
        }
        if ( title === 'Partidos' ) {
            setMatchModal(true);
        }
    }
    const handleHistory = () => {
        if ( title === 'Iniciar Sesion' ) {
            history.push("/home");
        }
        else if ( title === 'Crear Cuenta') {
            history.push("/login");
        }
        else {
            history.goBack();
        }
    }

    return (
        <Container fluid className='box-header-gradient'>
            
            <Row>
                <Col xs={2} md={2} className='text-left pt-3'>
                    <Button className='editButton' onClick={ handleHistory}>
                        <Image id='editIcon' src={ backIcon }/>
                    </Button>
                </Col>
                { 
                    ( title === 'Iniciar Sesion' || title === 'Crear Cuenta' || title === 'Detalles' || (props.loggedIn && !props.loggedIn.signIn) )
                ? 
                    <Col xs={10} md={10} className='text-title pt-3'>
                        <div>{ title }</div>
                    </Col>
                :   <>
                    <Col xs={6} md={6} className='text-title pt-3'>
                        <div>{ title }</div>
                    </Col>
                    
                    
                    <Col xs={4} md={4} className='text-right pt-3'>
                        <div className="d-flex">
                            <Button className='editButton' onClick={logOut}>
                                <Image id='logOutIcon' src={ logOutIcon }/>
                            </Button>
                            
                            { title === 'Partidos' ? 
                                <Button className='editButton' onClick={() => setRegisterModal(true)}>
                                    <Image id='editIcon' src={ addPlayer }/>
                                </Button>
                            :   <Button className='editButton' onClick={() => setPlayerModal(true)}>
                                    <Image id='editIcon' src={ addPlayer }/>
                                </Button> 
                            }
                            <Button className='editButton' onClick={selectModal}>
                                <Image id='editIcon' src={ editIcon }/>
                            </Button>
                        </div>
                    </Col>
                    </>
                }
            </Row>


            <TournamentModal 
                show={torneoModal}
                onHide={() => setTorneoModal(false)}
            />

            <PlayerModal 
                show={playerModal}
                onHide={() => setPlayerModal(false)}
            />

            <MatchModal
                show={matchModal}
                onHide={() => setMatchModal(false)}
                tournamentId={tournamentId}
                numRounds={numRounds}
                setNewMatch={setNewMatch}
            />

            <RegisterPlayerModal
                show={registerModal}
                onHide={() => setRegisterModal(false)}
                tournamentId={tournamentId}
                setNewPlayer={setNewPlayer}
            />

        </Container>

    );

}

export default PageTitle;