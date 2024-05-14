// App.jsx
import React from 'react';
import Card from './Card';

const App = () => {
  const cardsData = [
    { title: 'Computer Networks', content: 'This is the content of card 1', imageUrl: 'https://via.placeholder.com/150', buttonLabel: 'Learn More' },
    { title: 'Data Base Management System', content: 'This is the content of card 2', imageUrl: 'https://via.placeholder.com/150', buttonLabel: 'Learn More' },
    { title: 'System analysis and Design', content: 'This is the content of card 3', imageUrl: 'https://via.placeholder.com/150', buttonLabel: 'Learn More' },
    { title: 'Java', content: 'This is the content of card 4', imageUrl: 'https://via.placeholder.com/150', buttonLabel: 'Learn More' }
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-14">RPSC Programmer Content</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} imageUrl={card.imageUrl} buttonLabel={card.buttonLabel} />
        ))}
      </div>
    </div>
  );
};

export default App;
