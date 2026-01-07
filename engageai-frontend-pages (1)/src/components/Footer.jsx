import React from 'react';
export default function Footer(){
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} EngageAI</div>
      <div className="footer-links">
        <a href="/privacy" onClick={(e)=>e.preventDefault()}>Privacy</a>
        <a href="/terms" onClick={(e)=>e.preventDefault()}>Terms</a>
      </div>
    </footer>
  );
}
