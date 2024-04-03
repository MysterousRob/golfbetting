import React from 'react';

const Star = ({ filled }) => {
  return (
    <span style={{ color: filled ? 'gold' : 'gray' }}>
      &#9733; {/* Unicode star symbol */}
    </span>
  );
};

export default Star;