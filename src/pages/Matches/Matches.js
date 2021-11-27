import React from 'react';
import { Container } from 'react-bootstrap';
import MatchCard from '../../components/MatchCard/MatchCard';
import PageTitle from '../../components/PageTitle/PageTitle';
import { useHistory } from 'react-router-dom';

const Matches = () => {

    const history = useHistory();

    const pageTitle = 'Partidos';

    const dataMatches = [
        {
            "id": 3,
            "tournament_playing_category_id": 4,
            "first_registration_id": 11,
            "second_registration_id": 12,
            "round": 3,
            "winner_registration_id": 11,
            "number_of_sets_played": 3,
            "is_opponent_retired": null,
            "sets": [
              {
                "set_number": 0,
                "first_registration_games": 6,
                "second_registration_games": 0
              },
              {
                "set_number": 1,
                "first_registration_games": 4,
                "second_registration_games": 6
              },
              {
                "set_number": 2,
                "first_registration_games": 7,
                "second_registration_games": 5
              }
            ],
            "player_one_details": {
              "first_name": "Erick David",
              "last_name": "Mendoza Velasco",
              "photo_url": "https://direct.rhapsody.com/imageserver/images/alb.360702313/600x600.jpg"
            },
            "player_two_details": {
              "first_name": "Fabian",
              "last_name": "Ramirez",
              "photo_url": "https://media-exp1.licdn.com/dms/image/C4E03AQFWx6yMnFt3XQ/profile-displayphoto-shrink_800_800/0/1632948481148?e=1643241600&v=beta&t=bvcCMs5Fg9-EXQGLt7i0DaQzBgtSTn583GNjBnjElXc"
            }
          }
        //,
        // {
        //     id: '2',
        //     round: 'Semi-final',
        //     player1: 'Frank',
        //     imagePlayer1: 'https://cdn.discordapp.com/attachments/811013231438987294/878060561034801212/20210819_183907.jpg',
        //     imagePlayer2: 'https://media.discordapp.net/attachments/724130841122570280/876970656573583380/SPOILER_unknown.png',
        //     player2: 'Rul',
        //     place: 'Cancha 2',
        //     score: {
        //         firstSet: [6, 1],
        //         secondSet: [0, 6],
        //         thirdSet: [6, 7]
        //     }
        // }
    ];

    const handlerRedirectDetails = ( info ) => {
        history.push( '/details', info );
    }
    

    return (
        <div>

            <PageTitle title={pageTitle} />

            <Container fluid>
                {dataMatches.map(match => {
                    return (
                        <div onClick={ () => handlerRedirectDetails( match ) } 
                             key = { match.id }>
                            <MatchCard
                                player1 = { match.player_one_details.first_name + ' ' + match.player_one_details.last_name }
                                imagePlayer1 = { match.player_one_details.photo_url }
                                imagePlayer2 = { match.player_two_details.photo_url }
                                player2 = { match.player_two_details.first_name + ' ' + match.player_two_details.last_name }
                                round = { match.round }
                                score = { match.sets }/>
                        </div>
                    )
                } ) }
            </Container>
        </div>
    );
};

export default Matches;