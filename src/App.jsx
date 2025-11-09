import React from 'react';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Navbar from './Components/Section1/Navbar';
import Page1Content from './Components/Section1/Page1Content';

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=776',
      intro: '',
      color: 'blue',
      tag: 'Satisfied',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
      intro: '',
      color: 'lightseagreen',
      tag: 'Underserved',
    },
    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388',
      intro: '',
      color: 'amber',
      tag: 'Underbanked',
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
      intro: '',
      color: 'pink',
      tag: 'undersuspect',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661591044502-6437247b7d3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      intro: '',
      color: 'black',
      tag: 'Average',
    },
  ];

  return (
    <div>
      {/* <Navbar users={user} />
      <Page1Content /> */}

      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
