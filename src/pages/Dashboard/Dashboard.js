import React, { useEffect, useState } from 'react';
import {
    Container,
    Row
} from 'react-bootstrap';
import './Dashboard.scss';
import CardTournament from '../../components/CardTournament/CardTournament';
import PageTitle from '../../components/PageTitle/PageTitle';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Dashboard = (props) => {

    const [tournaments, setTournaments] = useState([]);

    const pageTitle = 'Torneos';

    const history = useHistory();

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
    const handlerRedirectMatches = (idTorneo, roundNum) => {
        history.push('/matches', { id: idTorneo, rounds: roundNum });
    }
    return (
        <div>
            <PageTitle loggedIn={props.loggedIn}
             title={pageTitle} modal={pageTitle} />
            <Container fluid>
                <Row>
                    <Container>

                        {tournaments.map(tournament =>
                            <div
                                onClick={() => handlerRedirectMatches(tournament.tournament_playing_category_id, tournament.number_of_rounds)}
                                key={tournament.tournament_playing_category_id}>
                                <CardTournament
                                    tournamentName={tournament.tournament_name}
                                    tournamentImage={tournament.tournament_photo}
                                />
                            </div>
                        )}
                    </Container>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;