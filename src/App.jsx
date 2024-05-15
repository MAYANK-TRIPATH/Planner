import React from 'react';
import Card from './Components/Card';
import Navbar from './Components/Navbar'



const App = () => {
  const cardsData = [
    { title: 'Computer Networks', content: 'Here you get all content (video, study material, pdf, link) for RPSC CN syllabus.', imageUrl: 'https://images.unsplash.com/photo-1521542464131-cb30f7398bc6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', buttonLabel: 'Content', path: '/Computer' },
    { title: 'Data Base Management System', content: 'Here you get all content (video, study material, pdf, link) for RPSC DBMS syllabus.', imageUrl: 'https://cdn.corporatefinanceinstitute.com/assets/database.jpeg', buttonLabel: 'Content', path: '/DBMS' },
    { title: 'System Analysis and Design', content: 'Here you get all content (video, study material, pdf, link) for RPSC SAD syllabus.', imageUrl: 'https://cdn.educba.com/academy/wp-content/uploads/2019/05/System-Development-Life-Cycle-SDLC.png', buttonLabel: 'Content', path: '/SAD' },
    { title: 'Java', content: 'Here you get all content (video, study material, pdf, link) for RPSC JAVA syllabus.', imageUrl: 'https://www.macworld.com/wp-content/uploads/2023/01/learn_java_on_mac.jpg?quality=50&strip=all', buttonLabel: 'Content', path: '/Java' }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mb-12 underline my-3">RPSC Programmer Content</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cardsData.map((card) => (
          <Card key={card.path} {...card} />
        ))}
      </div>
    </div>
  );
};
export default App;

