import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import editIcon from './editIcon.png';
import './PageTitle.scss';
import addPlayer from './addPlayer.png';
import TournamentModal from '../Modals/TournamentModal/TournamentModal';
import PlayerModal from '../Modals/PlayerModal/PlayerModal';
import MatchModal from '../Modals/MatchModal/MatchModal';
const PageTitle = ( props ) => {

    const title = props.title;

    const [torneoModal, setTorneoModal] = React.useState(false);
    const [playerModal, setPlayerModal] = React.useState(false)
    const [matchModal, setMatchModal] = React.useState(false)

    const selectModal = () => {
        if ( title === 'Torneos' ) {
            setTorneoModal(true);
        }
        if ( title === 'Partidos' ) {
            setMatchModal(true);
        }
    }

    return (
        <Container fluid className='box-header-gradient'>
            <Row>
                <Col xs={6} md={6} className='text-title p-3 px-4'>
                    <div>{ title }</div>
                </Col>
                <Col xs={6} className='text-right p-4'>
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