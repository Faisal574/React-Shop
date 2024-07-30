import React, { useState } from 'react';
import { IoStar } from 'react-icons/io5';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starRating = index + 1;
        return (
          <svg
            key={index}
            onClick={() => handleRating(starRating)}
            className={`w-5 h-5 cursor-pointer transition-colors duration-300 ${
              starRating <= rating ? 'fill-[#bfac5a]' : 'fill-transparent'
            } stroke-[#bfac5a]`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"/>
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
