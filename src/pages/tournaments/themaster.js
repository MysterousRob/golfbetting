import './../../assets/css/tournament.css'
import Header from './../../components/Header';
import Footer from '../../components/footer';

//create each 
function TheMasters() {
    return (
        <div>
            <Header />
                <div className='bubble'>
                    <h1 className='head'>
                        The  <br /> Masters
                    </h1>
                    <br />
                    <p className='paragraph'>
                        The Masters Tournament at Augusta National Golf Club is a prestigious event in golf, showcasing top players and iconic moments, while also embracing the excitement of betting for fans worldwide.
                    </p>
                </div>
            <Footer />
        </div>
    )
};

export default TheMasters;