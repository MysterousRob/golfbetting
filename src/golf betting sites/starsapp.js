import React, {useState} from 'react';
import StarRating from './stars';
import Star from './star';

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
                initalRating={rating}
                onChange={handleRatingChange}
                star={<CustomStar />}
            />
            <p>{rating}</p>
        </div>
    );
};

export default App;