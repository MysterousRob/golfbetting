import React, {useState, useEffect} from "react";
import './../assets/css/sites.css';
import Star from "./../components/star";
import App from "./../pages/betting/ratingindex"

const StarRating = ({totalStars, initialRating, onChange,}) => {
  const [rating, setRating] = useState(initialRating || 0);

  // useEffect (() => {
  //   if (initialRating) {
  //     setRating(initialRating);
  //   }
  // }, [initialRating]);

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
};
    

export default StarRating;