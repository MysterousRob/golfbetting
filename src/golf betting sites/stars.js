import React, {useState} from "react";
import './css/sites.css';

const StarRating = ({totalStars, initalRating, onChange}) => {
    const [rating, setRating] = useState(initialRating || 0);

    const handleClick = (starIndex) => {
        setRating(starIndex + 1);
        if(onChange){
            onChange(starIndex + 1);
        }
    };

    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? 'star filled' : 'star'}
          onClick={() => handleClick(index)}
        >
            
          &#9733;
        </span>
      ))}
        </div>
    )
}

export default StarRating;