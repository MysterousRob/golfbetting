import React, {useState} from "react";
import './css/sites.css';

const StarRating = ({totalStars, initalRating, onChange}) => {
    const [rating, setRating] = useState(initialRating || 0);

    const useEffect(() => {
      if (initialRating) {
        setRating(initalRating);
      }
    }, [initalRating]);

    const handleClick = (starIndex) => {
        setRating(starIndex + 1);
        if(onChange){
            onChange(starIndex + 1);
        }

    };
    return (
        <div className="star_rating">
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