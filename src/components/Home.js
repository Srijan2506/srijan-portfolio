// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import ShimmerButton from './ShimmerButton';

const Container = styled.div`
  padding: 50px;
  text-align: center;
  max-width: 1000px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 30px;
  color: #333;
`;

const Home = () => (
  <Container>
    <Title>Hi I'm Srijan Shukla 
    Welcome to My Portfolio</Title>
    <ShimmerButton href="#projects" className="shadow-2xl">
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        View My Projects
      </span>
    </ShimmerButton>
  </Container>
);

export default Home;