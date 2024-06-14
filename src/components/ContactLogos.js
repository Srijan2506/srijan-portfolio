import React from 'react';
import githubIcon from '../icons/github.png'; // Update the path if needed
import gmailIcon from '../icons/gmail.png'; // Update the path if needed
import linkedinIcon from '../icons/linkedin.png'; // Update the path if needed

const ContactLogos = () => (
  <div className="contact-logos">
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
      <img src={githubIcon} alt="GitHub" />
    </a>
    <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer">
      <img src={gmailIcon} alt="Gmail" />
    </a>
    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
      <img src={linkedinIcon} alt="LinkedIn" />
    </a>
  </div>
);

export default ContactLogos;
