import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage(){
  return (
    <>
      <Navbar/>
      <main style={{padding:20}}>
        <h1>About EngageAI</h1>
        <p>EngageAI helps small businesses create and schedule social campaigns with AI-generated content.</p>
        <h3>Contact</h3>
        <p>Email: support@engageai.example</p>
      </main>
      <Footer/>
    </>
  );
}
