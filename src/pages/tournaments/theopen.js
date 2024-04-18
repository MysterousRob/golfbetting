import './../../assets/css/tournament.css'
import Header from './../../components/Header';
import Footer from '../../components/footer';

function TheOpen() {
    return (
        <div>
            <Header />
            <div className="bubble">
                <h1 className="head">
                    The US <br /> Open
                </h1>
                <br />
                <p className="paragraph">
                    The US Open, one of golf's major championships, is a highly anticipated event that tests the skills and endurance of top players on challenging courses, captivating fans with its rich history and intense competition.
                </p>
            </div>
            <Footer />
        </div>
    )
};

export default TheOpen;