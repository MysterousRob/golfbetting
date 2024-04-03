import './tourniecss/tournament.css'
import Header from '../app-Header';
import Footer from '../forhomepg/footer';

function UsPga() {
    return (
        <div>
            <Header />     
            <div className='bubble'>
                <h1 className="head">
                    USA PGA Championship
                </h1>
                <br />
                <p className="paragraph">
                    The US PGA Championship, one of golf's major tournaments, showcases the world's top players battling for supremacy on diverse courses across the United States, delivering thrilling moments and intense competition.
                </p>
            </div>
            <Footer />
        </div>
    )
}; 

export default UsPga;