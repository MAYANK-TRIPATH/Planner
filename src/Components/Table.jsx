import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-900 text-left">
            <th className="py-3 px-6 font-semibold">Sr.no</th>
            <th className="py-3 px-6 font-semibold">Topic Name</th>
            <th className="py-3 px-6 font-semibold">Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
              <td className="py-3 px-4 md:px-6">{row.column1}</td>
              <td className="py-3 px-4 md:px-6">{row.column2}</td>
              <td className="py-3 px-4 md:px-6">
                <a href={row.link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  {row.linkText}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
