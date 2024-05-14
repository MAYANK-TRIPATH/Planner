// Card.jsx
import React from 'react';

const Card = ({ title, content, imageUrl, buttonLabel }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-5 py-8">
        <h2 className="font-bold text-xl mb-8">{title}</h2>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 py-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Card;
