import React, { useEffect, useState } from 'react';
import HeroImage from './hero-illustration.png';

function Hero() {
  useEffect(() => {
    const heroIllustration = document.querySelector('.hero-illustration');

    function animateHeroIllustration() {
      heroIllustration.classList.add('illustration-fading');
    }

    animateHeroIllustration();
  }, []);

  const [name, setName] = useState('');
  const nameText = 'Maya Atiah';
  let index = 0;
  let typingName = '';

  useEffect(() => {
    function type() {
      if (index < nameText.length) {
        typingName += nameText.charAt(index);
        setName(typingName);
        index++;
        setTimeout(type, 350);
      }
    }

    // Clear the name before starting typing
    setName('');
    typingName = '';
    setTimeout(type, 200); // Start typing after clearing
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <p className="bubble">HELLO</p>
        <p className="hero-text">
          I am <span className="span-name">{name}</span>
          <br />a Full Stack Web Developer
        </p>
        <button className="download-cv">DOWNLOAD CV</button>
      </div>
      <img
        className="hero-illustration illustration-fading"
        src={HeroImage}
        alt="Creating your websites"
      />
    </div>
  );
}

export default Hero;
