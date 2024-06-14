import React from 'react';
import './Home.css'; // Import the CSS file
import IconCloud from './IconCloud';

const slugs = [
  // ... (same array as before)
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro">
        <h1>Hi, I'm Srijan Shukla <span role="img" aria-label="wave">👋</span></h1>
        <p>I'm a Aspiring Java Devloper with an interest in <strong>Web Devlopment</strong>.</p>
        <div className="buttons">
        
        </div>
      </div>
      <div className="icon-cloud-container">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};

export default Home;
