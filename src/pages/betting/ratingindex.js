import React, {useState} from 'react';
import StarRating from './../../components/stars';
import Star from './../../components/star';

const CustomStar = () => {
    <Star />
    return <span>&#9733;</span>
};

const App = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    return(
        <div>
            <StarRating 
                totalStars={5}
                initalRating={3}
                onChange={handleRatingChange}
                star={<CustomStar />}
            />
            <p>{rating}</p>
        </div>
    );
};

export default App;