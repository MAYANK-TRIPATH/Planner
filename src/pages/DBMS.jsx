import React from 'react';
import Table from '../Components/Table'; 
import Navbar from '../Components/Navbar';

const DBMS = () => {
  const tableData = [
    { column1: '1', column2: 'Introduction to DBMS', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '2', column2: 'The Entity–Relationship Model', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '3', column2: 'Integrity Constraints and Codds Rule', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '4', column2: 'Relational Data Model ', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '5', column2: 'Basic of Functional Dependencies and normalization relational database', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '6', column2: 'Relational Algebra and Relational calculus ', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '7', column2: 'Basic SQL', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '8', column2: 'Complex Queries, Triggers, Views and Schema modification', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '9', column2: 'Storage and File structure', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '10', column2: 'Indexing and Hashing', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '11', column2: 'Query Processing & Query Optimization', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '12', column2: 'Transaction Management', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '13', column2: 'Concurrency Control', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '14', column2: 'Recovery Techniques', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '15', column2: 'Database Security', linkText: 'Link', link: 'https://www.google.com' },
    
    // Add more rows as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <Navbar />
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-center mb-8">DBMS Networks Content</h1>
      <div className="w-full max-w-4xl">
        <Table data={tableData} />
      </div>
    </div>
    <div>
    <a href="https://www.youtube.com/playlist?list=PLG9aCp4uE-s0bu-I8fgDXXhVLO4qVROGy" target="_blank" rel="noopener noreferrer">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    DBMS-Playlist
  </button>
    </a>
    </div>
    </div>
  );
};

export default DBMS;
