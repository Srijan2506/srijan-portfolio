// src/components/Projects.js
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

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProjectCard = styled.div`
  padding: 20px;
  width: 300px;
  border-radius: 10px;
  background-color: #fff;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #0073e6;
  text-align: center;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
`;

const Projects = () => (
  <Container>
    <Title>My Projects</Title>
    <ProjectsContainer>
      <ProjectCard>
        <ProjectTitle>Critic’s Corner: A Movie Review Application</ProjectTitle>
        <ProjectDescription>
        Critic's Corner is a web-based application designed for movie enthusiasts to discover, review, and discuss their favorite films. The platform allows users to browse a curated list of movies, post reviews, and rate films. Additionally, users can search movie trailers to get a quick preview before diving in.
        </ProjectDescription>
        <ShimmerButton href="https://github.com/Srijan2506/Critic-s-Corner-A-Movie-Review-Application" className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            View on GitHub
          </span>
        </ShimmerButton>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>watchlist Application</ProjectTitle>
        <ProjectDescription>
        Designed and developed a user-friendly watchlist application for movie enthusiasts. (Create, Read, Update) operations using Spring Boot, Users can add, manage, and organize their desired movies to watch.nhances user experience by providing a centralized platform for movie tracking.
        </ProjectDescription>
        <ShimmerButton href="https://github.com/Srijan2506/WatchlistApplication" className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            View on GitHub
          </span>
        </ShimmerButton>
      </ProjectCard>
    </ProjectsContainer>
  </Container>
);

export default Projects;