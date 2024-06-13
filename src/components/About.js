// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 50px;
  text-align: center;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 30px;
  color: #333;
`;

const Content = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  margin-top: 30px;
  font-size: 1.1em;
  color: #333;
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
`;

const ContactLink = styled.a`
  color: #0073e6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Content>
        I am a passionate Java Developer with a strong interest in cloud computing and web development.
      </Content>
      <ContactInfo>
        <ContactItem>
          <strong>Email:</strong> <ContactLink href="mailto:srijanshukla2506@gmail.com">srijanshukla2506@gmail.com</ContactLink>
        </ContactItem>
        <ContactItem>
          <strong>GitHub:</strong> <ContactLink href="https://github.com/Srijan2506" target="_blank" rel="noopener noreferrer">github.com/Srijan2506</ContactLink>
        </ContactItem>
        <ContactItem>
          <strong>LinkedIn:</strong> <ContactLink href="https://www.linkedin.com/in/srijanshukla2506/" target="_blank" rel="noopener noreferrer">linkedin.com/in/srijanshukla2506</ContactLink>
        </ContactItem>
        {/* Add more contact items here */}
      </ContactInfo>
    </Container>
  );
};

export default About;