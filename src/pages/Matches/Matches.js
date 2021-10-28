import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Container } from 'react-bootstrap';
import MatchCard from '../../components/MatchCard/MatchCard';
import PageTitle from '../../components/PageTitle/PageTitle';

const Matches = () => {

    const pageTitle = 'Partidos';

    const dataMatches = [
        {
            round: 'Semi-final',
            player1: 'Erick',
            player2: 'Gus',
            imagePlayer1: 'https://media.discordapp.net/attachments/724130841122570280/876970656573583380/SPOILER_unknown.png',
            imagePlayer2: 'https://cdn.discordapp.com/attachments/811013231438987294/878060561034801212/20210819_183907.jpg',
            place: 'Cancha 1',
            score: {
                firstSet: [6, 0],
                secondSet: [6, 7],
                thirdSet: [6, 7]
            }
        },
        {
            round: 'Semi-final',
            player1: 'Frank',
            imagePlayer1: 'https://cdn.discordapp.com/attachments/811013231438987294/878060561034801212/20210819_183907.jpg',
            imagePlayer2: 'https://media.discordapp.net/attachments/724130841122570280/876970656573583380/SPOILER_unknown.png',
            player2: 'Rul',
            place: 'Cancha 2',
            score: {
                firstSet: [6, 1],
                secondSet: [0, 6],
                thirdSet: [6, 7]
            }
        }
    ];

    return (
        <div>

            <PageTitle title={pageTitle} />

            <Container>
                {dataMatches.map(match => {
                    return (
                        <MatchCard
                            player1={match.player1}
                            imagePlayer1={match.imagePlayer1}
                            imagePlayer2={match.imagePlayer2}
                            player2={match.player2}
                            place={match.place}
                            round={match.round}
                            score={match.score} />
                    )
                })}
            </Container>
        </div>
    );
};

export default Matches;