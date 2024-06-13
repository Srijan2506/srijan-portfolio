// src/components/Contact.js
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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #0073e6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Title>Contact Me</Title>
      <ContactForm>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea rows="5" placeholder="Your Message"></TextArea>
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </Container>
  );
};

export default Contact;