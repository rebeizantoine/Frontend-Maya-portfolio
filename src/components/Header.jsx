import React, { useState, useEffect } from 'react';
import Logo from './logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Add event listeners when the component mounts
    var btnMenu = document.getElementsByClassName("burger-menu");
    var body = document.body;

    for (var i = 0; i < btnMenu.length; i++) {
      btnMenu[i].addEventListener('click', function () {
        body.classList.toggle('menu-open');
      });
    }

    // Clean up event listeners when the component unmounts
    return () => {
      for (var i = 0; i < btnMenu.length; i++) {
        btnMenu[i].removeEventListener('click', function () {
          body.classList.toggle('menu-open');
        });
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className={`header ${isMenuOpen ? 'menu-open' : ''}`} id="home">
      <a href="/"><img className="logo-maya" src={Logo} alt="Logo" /></a>

      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#experience">Experience</a></li>
          <li><a href="/#skills">Skills</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>

      <button className="burger-menu" type="button" onClick={toggleMenu}>
        <i className={`burger-menu-bars ${isMenuOpen ? 'active' : ''}`} aria-hidden="true"></i>
      </button>

      <ul className={`menu-list ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#skills">Skills</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Header;
