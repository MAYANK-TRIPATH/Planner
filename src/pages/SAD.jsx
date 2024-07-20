import React from 'react';
import Table from '../Components/Table'; 
import Navbar from '../Components/Navbar';

const SAD = () => {
  const tableData = [
    { column1: '1', column2: 'Software Development Life Cycle', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '2', column2: 'System concept', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '3', column2: 'System Analyst', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '4', column2: 'System Analysis', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '5', column2: 'Fact Finding Techniques', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '6', column2: 'Feasibility study', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '7', column2: 'Cost benefit analysis', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '8', column2: 'Analysis Tools', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '9', column2: 'System Design', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '10', column2: 'Input output form design', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '11', column2: 'Object-oriented Design', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '12', column2: 'System Development', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '13', column2: 'Testing', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '14', column2: 'Software Maintenance', linkText: 'Link', link: 'https://www.google.com' },
    
    // Add more rows as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
    <Navbar />
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-center mb-8"> SAD Networks Content</h1>
      <div className="w-full max-w-4xl">
        <Table data={tableData} />
      </div>
    </div>
    <div>
    <a href="https://www.youtube.com/playlist?list=PLi81x6d2Os_8Sa8HifiFruWK6wmgG3Wrg" target="_blank" rel="noopener noreferrer">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    SAD Playlist-1
  </button>
    </a>
    <hr></hr>
    </div>
    <div>
    <a href="https://www.youtube.com/playlist?list=PLpTOe981SqUcssflSvQMa7UnoPm4_JaJc" target="_blank" rel="noopener noreferrer">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
    SAD Playlist-2
  </button>
    </a>

    </div>
    </div>
  );
};

export default SAD;
