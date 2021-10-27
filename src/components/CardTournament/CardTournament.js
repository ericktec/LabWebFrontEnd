import "./CardTournament.scss";

const CardTournament = ( { tournamentId ,tournamentName, tournamentImage } ) => {
  return (
    <div className="card tr-card mb-4">
        <div className="card-body">
            <img className="card-image" src={ tournamentImage } alt="fondo">
            </img>
            <h5 className="card-title"> 
                { tournamentName }
            </h5>
        </div>
    </div>
  );
};

export default CardTournament;
