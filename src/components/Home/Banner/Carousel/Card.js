import React from 'react';

const Card = ({ img, title }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: ` linear-gradient(to top, #000, #ffffff00), url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="mt-72 mr-20 text-4xl uppercase font-bold">{title}</h2>
    </div>
  );
};

export default Card;
