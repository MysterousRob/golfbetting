import './tourniecss/tournament.css'
import Header from '../app-Header';
import Footer from '../forhomepg/footer';

function OpenChamp() {
    return (
        <div>
            <Header />
            <div className="bubble">
                <h1 className="head">
                    The Open Championship
                </h1>
                <br />
                <p className="paragraph">
                The Open Championship, often referred to as the "British Open," is one of golf's oldest and most prestigious tournaments, steeped in tradition and held on iconic links courses in the United Kingdom.
                </p>
            </div>
            <Footer />
        </div>
    )
};

export default OpenChamp;