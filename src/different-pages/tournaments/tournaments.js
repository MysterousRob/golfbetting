import UsPga from './uspga';
import OpenChamp from './openchamp';
import TheMasters from './themaster';
import TheOpen from './theopen';

function Competiton() {
    const golfTournaments = [TheMasters, OpenChamp, TheOpen, UsPga];

    const renderGolfTournaments = () => {
        golfTournaments.map((TournamentComponent) => (
           <TournamentComponent key={TournamentComponent.name || 'tournament'} /> 
        ));
    };

    return (
        <div>
            {renderGolfTournaments}
        </div>
    ); 
}

export default Competiton;