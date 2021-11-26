import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import editIcon from './editIcon.png';
import './PageTitle.scss';
import addPlayer from './addPlayer.png';
import backIcon from './backIcon.png';
import TournamentModal from '../Modals/TournamentModal/TournamentModal';
import PlayerModal from '../Modals/PlayerModal/PlayerModal';
import MatchModal from '../Modals/MatchModal/MatchModal';
import { useHistory } from 'react-router-dom';

const PageTitle = ( props ) => {

    const title = props.title;

    const [torneoModal, setTorneoModal] = React.useState(false);
    const [playerModal, setPlayerModal] = React.useState(false);
    const [matchModal, setMatchModal] = React.useState(false);

    const history = useHistory();

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
                    ( title === 'Iniciar Sesion' || title === 'Crear Cuenta' )
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
                            { title === 'Partidos' ? 
                                <Button className='editButton' onClick={() => setPlayerModal(true)}>
                                    <Image id='editIcon' src={ addPlayer }/>
                                </Button>
                            : false }
                            <Button className='editButton' onClick={selectModal}>
                                <Image id='editIcon' src={ editIcon }/>
                            </Button>
                        </div>
                    </Col>
                    </>
                }
            </Row>
            <Row>
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
            />
        </Container>

    );

}

export default PageTitle;