import React from 'react';
import Table from '../Components/Table'; 
import Navbar from '../Components/Navbar';

const Computer = () => {
  const tableData = [
    { column1: '1', column2: 'Network Reference Model', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '2', column2: 'Flow control', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '3', column2: 'Framing', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '4', column2: 'computer network architecture', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '5', column2: ' Data and Signals', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '6', column2: 'Transmission Media', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '7', column2: 'Topology', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '8', column2: 'Switching', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '9', column2: 'Error detection and correction', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '10', column2: 'Media Access Control', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '11', column2: 'IP addressing', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '12', column2: 'Routing', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '13', column2: 'Congestion control', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '14', column2: 'Network devices', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '15', column2: 'Network layer protocol ', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '16', column2: 'Transport layer protocol', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '17', column2: 'Application layer protocol', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '18', column2: 'Network management and interoperability', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '19', column2: 'Network security', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '20', column2: 'Multiplexing', linkText: 'Link', link: 'https://www.google.com' },
    { column1: '21', column2: 'High speed LANs', linkText: 'Link', link: 'https://www.google.com' },
    
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <Navbar />
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-center mb-8 underline">Computer Networks Content</h1>
      <div className="w-full max-w-screen-xl">
        <Table data={tableData} />
      </div>
    </div>
    <div>
    <a href="https://www.youtube.com/playlist?list=PL0ZSFmjQwgqs2ceBdtY1Csfbm5w3zV358" target="_blank" rel="noopener noreferrer">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Computer Networks Playlist-1
  </button>
    </a>

    </div>
    <hr></hr>
    <div>
    <a href="https://www.youtube.com/playlist?list=PL3eEXnCBViH-hlNCNwdfV7VrEcTquANGa" target="_blank" rel="noopener noreferrer">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Computer Networks Playlist-2
  </button>
    </a>

    </div>
    </div>
  );
};

export default Computer;
