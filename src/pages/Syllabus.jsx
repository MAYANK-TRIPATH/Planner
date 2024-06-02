
import React from 'react';
import Navbar from '../Components/Navbar';

const Syllabus= () => {
  return (
   
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 underline text-center">Syllabus for RPSC</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 underline text-center">Paper - I</h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Reasoning Test & Numerical Analysis & General Knowledge</h3>
            <p>Problem solving, Data Interpretation, Data Sufficiency, Logical Reasoning and Analytical Reasoning. General Knowledge and Current Affairs relating to India and Rajasthan.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Data Base Management Systems</h3>
            <p>ER Diagram, data models- Relational and Object Oriented databases. Data Base Design: Conceptual data base design, Normalization Primitive and Composite data types, concept of physical and logical databases, data abstraction and data independence, data aggregation and Relational Algebra.</p>
            <p>Application Development using SQL: Host Language interface, embedded SQL programming, Stored procedures and triggers and views, Constraints assertions.</p>
            <p>Internal of RDBMS: Physical data organisation in sequential, indexed random and hashed files. Inverted and multilist structures, B trees, B+ trees, Query Optimisation, Join algorithm.</p>
            <p>Transaction Processing, concurrency control and recovery management. Transaction model properties and state serialisability. Lock base protocols, two phase locking.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Data Communication and Computer Networks</h3>
            <p>Computer Network Architecture, Circuit switching, Packet And Massage Switching, Network Structure. Physical Layer, Data Link Layer, Framing. Retransmission algorithms. Multiple access and Aloha. CSMA/CD and Ethernet. High Speed LANs and topologies. Broadcast routing and spanning trees. TCP/IP Stack. IP Networks and Internet. DNS and Firewalls. Intrusion Detection and Prevention. Transport layer and TCP/IP. Network Management and Interoperability.</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 underline text-center">Paper - II</h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">System Analysis and Design</h3>
            <p>System concept: Definition and characteristics, elements and boundaries, types of system development lifecycle, recognition of needs, feasibility study, prototyping, role of system analyst.</p>
            <p>System planning and tools like DFD, data dictionary, decision trees, structured analysis and decision tables. IPO charts, structured walkthrough, input output form design, requirement and classification of forms, layout considerations form control, object oriented Design Concepts and methods.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Software Life Cycle, Software Engineering paradigms</h3>
            <p>System analysis: Feasibility study requirement analysis, Cost benefit analysis, Planning systems, Analysis tools and techniques.</p>
            <p>System Design: design fundamentals, Modular Design, Data and procedural design, object oriented design.</p>
            <p>System Development: Code documentation, Program design paradigms, Efficiency Consideration.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Programming Concepts</h3>
            <p>Introduction: Internet, Java as a tool for internet applications, Byte Code and its advantages. Object Oriented Programming and Design: Review of Abstraction, Objects and other basics, Encapsulation, Information hiding, Method, Signature, Classes and Instances, Polymorphism, Inheritance, Exceptions and Exception Handling with reference to object modeling, Coupling and Cohesion in object oriented software. Object Oriented Design – Process, Exploration and Analysis. Java Programming Basics: Variables and assignments, Input and Output, Data Types and Expressions, Flow of control, Local variables, Overloading Parameter passing, this pointer, Java Object Oriented Concepts: Use of file for I/O, Formatting output with stream functions, Character I/O, Inheritance, Public and private members, Constructors for initializations, Derived classes, Flow of Control Arrays-Programming with arrays, arrays of classes, arrays of</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
