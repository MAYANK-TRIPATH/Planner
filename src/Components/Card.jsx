import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, content, imageUrl, buttonLabel, path }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white m-4">
      <img className="w-full" src={imageUrl} alt={`${title} image`} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-white text-base">{content}</p>
      </div>
      <div className="px-6 py-4">
        <Link to={path}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {buttonLabel}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
