import TheMasters2 from './full info/themaster2';
import TheOpen2 from './full info/theopen2';
import UsPga2 from './full info/uspga2';
import OpenChamp2 from './full info/openchamp2';
import './../../assets/css/tournament.css';


function Competiton() {
    return (
        <div className='compete'>
        <UsPga2 />
        <OpenChamp2 />
        <TheMasters2 />
        <TheOpen2 /> 
        </div>
    ); 
}
//map all the dialogues and make individual pages which are maped with links 
export default Competiton;