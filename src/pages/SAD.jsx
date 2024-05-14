import React from 'react';
import Table from '../Components/Table'; // Ensure the path is correct

const SAD = () => {
  const tableData = [
    { column1: '1', column2: 'Network Reference Model', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '2', column2: 'Flow control', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '3', column2: 'Framing', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '4', column2: 'Network Reference Model', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '5', column2: 'Flow control', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '6', column2: 'Framing', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '7', column2: 'Network Reference Model', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '8', column2: 'Flow control', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '9', column2: 'Framing', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '10', column2: 'Network Reference Model', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '11', column2: 'Flow control', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '12', column2: 'Framing', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '13', column2: 'Network Reference Model', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '14', column2: 'Flow control', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '15', column2: 'Framing', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '16', column2: 'Network Reference Model', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '17', column2: 'Flow control', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '18', column2: 'Framing', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '19', column2: 'Network Reference Model', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '20', column2: 'Flow control', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '21', column2: 'Framing', linkText: 'Link', link: 'https://www.google.com' },
    // Add more rows as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-center mb-8"> SAD Networks Content</h1>
      <div className="w-full max-w-4xl">
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default SAD;
