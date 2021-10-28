import React from 'react';
import {
    Container,
    Row
} from 'react-bootstrap';
import './Dashboard.scss';
import NavBar from '../../components/NavBar/NavBar';
import CardTournament from '../../components/CardTournament/CardTournament';


const Dashboard = ({ loggedIn, setLoggedIn }) => {

    return (
        <div>
            <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Container fluid>
                <Row>
                    <div className='box-header-gradient'>Torneos</div>
                </Row>
                <Row>
                    <Container>
                        <CardTournament
                            tournamentName={'Tepatitlan'}
                            tournamentImage={'https://www.wallpapertip.com/wmimgs/31-315325_tennis-ball-sport-wallpaper-tennis-wallpapers-hd.jpg'}
                        />

                        <CardTournament
                            tournamentName={'Lagos de Moreno'}
                            tournamentImage={'https://images5.alphacoders.com/971/thumb-1920-971321.jpg'}
                        />
                    </Container>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;