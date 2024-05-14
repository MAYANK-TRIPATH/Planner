// Card.jsx
import React from 'react';

const Card = ({ title, content, imageUrl, buttonLabel }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white m-4 rounded">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-8 py-6">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-white-700 text-base">{content}</p>
      </div>
      <div className="px-2 py-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-28 rounded">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Card;
