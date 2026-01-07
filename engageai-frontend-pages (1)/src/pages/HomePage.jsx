import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './HomePage.css';

export default function HomePage(){
  return (
    <>
      <Navbar/>
      <main className="home-root">
        <section className="hero">
          <div>
            <h1>AI-powered social campaigns for small businesses</h1>
            <p>Create captions, schedule posts, and track analytics — all in one place.</p>
            <div style={{marginTop:16}}>
              <a href="/register" className="btn btn-primary">Start Free Trial</a>
              <a href="/builder" className="btn btn-outline" style={{marginLeft:8}}>Try Demo Campaign</a>
            </div>
          </div>
          <div className="hero-mock">Campaign preview will appear here</div>
        </section>

        <section className="features">
          <div className="feature">AI Content Generator</div>
          <div className="feature">One-click Posting</div>
          <div className="feature">Analytics Dashboard</div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
