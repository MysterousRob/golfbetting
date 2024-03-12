import UsPga from './uspga';
import OpenChamp from './openchamp';
import TheMasters from './themaster';
import TheOpen from './theopen';
import './tourniecss/tournament.css'
function Competiton() {
    return (
        <div className='compete'>
        <UsPga />
        <OpenChamp />
        <TheMasters />
        <TheOpen /> 
        </div>
    ); 
}

export default Competiton;