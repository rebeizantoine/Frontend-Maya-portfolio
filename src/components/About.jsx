import React, { useState, useEffect } from 'react';

function About() {
  const [aboutText, setAboutText] = useState('');

  useEffect(() => {
    // Fetch the aboutText from the API
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/api/about');
        const data = await response.json();
        if (data.data.length > 0) {
          setAboutText(data.data[0].txt);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="about" id="about">
      <h1>ABOUT ME</h1>
      <div className="about-text-container">
        <p className="about-text">{aboutText}</p>
      </div>
    </div>
  );
}

export default About;
