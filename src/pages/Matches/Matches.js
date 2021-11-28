import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import MatchCard from '../../components/MatchCard/MatchCard';
import PageTitle from '../../components/PageTitle/PageTitle';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

const Matches = (props) => {

  const [matches, setMatches] = useState([]);

  const [newMatch, setNewMatch] = useState();

  const [newPlayer, setNewPlayer] = useState();

  const history = useHistory();

  const pageTitle = 'Partidos';

  const location = useLocation();

  const id = location.state ? location.state.id : history.push('/dashboard');

  const rounds = location.state ? location.state.rounds : history.push('/dashboard');;

  useEffect(() => {
    async function getMatches() {
      try {
        const response = await axios({
          method: 'get',
          url: `http://127.0.0.1:3000/games/getGames/${id}`
        });
        if (response.status === 200 && response.data.status === 'success') {
          setMatches(response.data.gamesDetails)
        }
      } catch (error) {
        console.log(error);
      }
    }

    getMatches();
  }, [id, newMatch, newPlayer]);


  const handlerRedirectDetails = (info) => {
    history.push('/details', info);
  }


  return (
    <div>

      <PageTitle loggedIn={props.loggedIn} title={pageTitle} tournamentId={id} numRounds={rounds} setNewMatch={setNewMatch} setNewPlayer={setNewPlayer} />

      <Container fluid>
        {matches.map(match => {
          return (
            <div onClick={() => handlerRedirectDetails(match)}
              key={match.id}>
              <MatchCard
                player1={match.player_one_details.first_name + ' ' + match.player_one_details.last_name}
                imagePlayer1={match.player_one_details.photo_url}
                imagePlayer2={match.player_two_details.photo_url}
                player2={match.player_two_details.first_name + ' ' + match.player_two_details.last_name}
                round={match.round}
                score={match.sets} />
            </div>
          )
        })}
      </Container>
    </div>
  );
};

export default Matches;