import React from 'react';
import Table from '../Components/Table'; // Ensure the path is correct

const Java = () => {
  const tableData = [
    { column1: '1', column2: 'History & Introduction of Java', linkText: 'Live', link: '#' },
    { column1: '2', column2: 'First Java Application', linkText: 'Live', link: '#' },
    { column1: '3', column2: 'Identifiers', linkText: 'Live', link: '#' },
    { column1: '4', column2: 'Keywords', linkText: 'Live', link: '#' },
    { column1: '5', column2: 'Data type', linkText: 'Live', link: '#' },
    { column1: '6', column2: 'Literals', linkText: 'Live', link: '#' },
    { column1: '7', column2: 'Array', linkText: 'Live', link: '#' },
    { column1: '8', column2: 'Types of Variables', linkText: 'Live', link: '#' },
    { column1: '9', column2: 'Var Arg Methods', linkText: 'Live', link: '#' },
    { column1: '10', column2: 'Command Line Arguments', linkText: 'Live', link: '#' },
    { column1: '11', column2: 'Java Coding Standards', linkText: 'Live', link: '#' },
    { column1: '12', column2: 'Operator', linkText: 'Live', link: '#' },
    { column1: '13', column2: 'Java Program Format', linkText: 'Live', link: '#' },
    { column1: '14', column2: 'Import and Static Import', linkText: 'Live', link: '#' },
    { column1: '15', column2: 'Package', linkText: 'Live', link: '#' },
    { column1: '16', column2: 'Access Modifiers', linkText: 'Live', link: '#' },
    { column1: '17', column2: 'Flow control', linkText: 'Live', link: '#' },
    { column1: '18', column2: 'Exception Handling', linkText: 'Live', link: '#' },
    { column1: '19', column2: 'OOPs Concepts - Data Hiding(Abstraction and Encapsulation)', linkText: 'Live', link: '#' },
    { column1: '20', column2: 'OOPs Concepts - Containers in Java (Class, Abstract Class, Interface)', linkText: 'Live', link: '#' },
    { column1: '21', column2: 'OOPs Concepts - Methods in Java', linkText: 'Live', link: '#' },
    { column1: '22', column2: 'OOPs Concept - Object in java', linkText: 'Live', link: '#' },
    { column1: '23', column2: 'OOPs Concept - Constructors', linkText: 'Live', link: '#' },
    { column1: '24', column2: 'OOPs Concept - Instance Context', linkText: 'Live', link: '#' },
    { column1: '25', column2: 'OOPs Concepts - this Keyword', linkText: 'Live', link: '#' },
    { column1: '26', column2: 'OOPs Concepts - static Keyword', linkText: 'Live', link: '#' },
    { column1: '27', column2: 'OOPs Concepts - final Keyword', linkText: 'Live', link: '#' },
    { column1: '28', column2: 'OOPs Concept - Main Method', linkText: 'Live', link: '#' },
    { column1: '29', column2: 'OOPs Concepts - Relationships in java', linkText: 'Live', link: '#' },
    { column1: '30', column2: 'OOPs Concepts - Inheritance', linkText: 'Live', link: '#' },
    { column1: '31', column2: 'OOPs Concepts - super Keyword', linkText: 'Live', link: '#' },
    { column1: '32', column2: 'OOPs Concepts - Object type casting(non-primitive type casting)', linkText: 'Live', link: '#' },
    { column1: '33', column2: 'OOPs Concepts - Polymorphism', linkText: 'Live', link: '#' },
    { column1: '34', column2: 'OOPs Concepts - Coupling and Cohesion', linkText: 'Live', link: '#' },
    { column1: '35', column2: 'OOPs Concepts - Interface', linkText: 'Live', link: '#' },
    { column1: '36', column2: 'OOPs Concepts - Object Cloning', linkText: 'Live', link: '#' },
    { column1: '37', column2: 'Multithreading', linkText: 'Live', link: '#' },
    { column1: '38', column2: 'Inner Classes', linkText: 'Live', link: '#' },
    { column1: '39', column2: 'java.lang package - Object class', linkText: 'Live', link: '#' },
    { column1: '40', column2: 'java.lang package - String, StringBuffer, StringBuilder', linkText: 'Live', link: '#' },
    { column1: '41', column2: 'java.lang package - Wrapper Classes', linkText: 'Live', link: '#' },
    { column1: '42', column2: 'java.lang package - AutoBoxing and Unboxing', linkText: 'Live', link: '#' },
    { column1: '43', column2: 'java.io Package', linkText: 'Live', link: '#' },
    { column1: '44', column2: 'Serialization', linkText: 'Live', link: '#' },
    { column1: '45', column2: 'Collections Framework', linkText: 'Live', link: '#' },
    { column1: '46', column2: 'Generics', linkText: 'Live', link: '#' },
    { column1: '47', column2: 'ENUM', linkText: 'Live', link: '#' },
    { column1: '48', column2: 'Networking in Java', linkText: 'Live', link: '#' },
    { column1: '49', column2: 'RMI (Remote Method Invocation)', linkText: 'Live', link: '#' },
    { column1: '50', column2: 'GUI (Graphical user Interface)', linkText: 'Live', link: '#' },
    { column1: '51', column2: 'Garbage Collection', linkText: 'Live', link: '#' },
    { column1: '52', column2: 'OOPs Concepts - OOPs Vs Others', linkText: 'Live', link: '#' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Java Content</h1>
      <div className="w-full max-w-4xl">
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default Java;
