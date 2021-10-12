import React from 'react';
import {
    Container,
    Row
} from 'react-bootstrap';
import './Dashboard.scss';
import NavBar from '../../components/NavBar/NavBar';
import CardTournament from '../../components/CardTournament/CardTournament';


const Dashboard = () => {

    return (
        <div>
            <NavBar/>
            <Container fluid>
                <Row>
                    <div className='box-header-gradient'>Torneos</div>    
                </Row>
                <Row>
                    <Container>
                        <CardTournament></CardTournament>
                    </Container>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;