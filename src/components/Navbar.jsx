import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <a href="#" className="logo">J<span>P</span></a>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="/resume.pdf" download="Jenil_Patel_Resume.pdf" className="btn btn-outline btn-sm" onClick={() => setIsOpen(false)}>Resume</a></li>
          <li><a href="#contact" className="btn btn-primary btn-sm" onClick={() => setIsOpen(false)}>Contact Me</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
