import React, { useEffect, useState } from 'react';
import {
    Container,
    Row
} from 'react-bootstrap';
import './Dashboard.scss';
import NavBar from '../../components/NavBar/NavBar';
import CardTournament from '../../components/CardTournament/CardTournament';
import PageTitle from '../../components/PageTitle/PageTitle';
import axios from 'axios';

const Dashboard = () => {

    const [tournaments, setTournaments] = useState([]);

    const pageTitle = 'Torneos';

    useEffect(() => {
        async function getTournaments() {
            try {
                const response = await axios({
                    method: 'get',
                    url: 'http://127.0.0.1:3000/tournaments/allTournaments'
                });
                if (response.status === 200 && response.data.status === 'success') {
                    setTournaments(response.data.tournaments)
                }
            } catch (error) {
                console.log(error);
            }
        }

        getTournaments();
    }, []);

    return (
        <div>
            <PageTitle title={pageTitle} modal={pageTitle}/>
            <Container fluid>
                <Row>
                    <Container>

                        {tournaments.map(tournament => <CardTournament key={tournament.tournament_playing_category_id}
                            tournamentName={tournament.tournament_name}
                            tournamentImage={tournament.tournament_photo}
                        />)}
                    </Container>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;