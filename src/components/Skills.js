import React from 'react';
import styled from 'styled-components';
import ShineBorder from './ShineBorder';

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

const SkillsSection = styled.div`
  margin-bottom: 40px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const SkillCard = styled.div`
  padding: 20px;
  width: 200px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const SkillTitle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #0073e6;
`;

const SkillCategory = styled.h3`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #555;
`;

const Skills = () => (
  <Container>
    <Title>My Skills</Title>

    <SkillsSection>
      <SkillCategory>Programming</SkillCategory>
      <SkillsContainer>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <SkillCard>
            <SkillTitle>Core Java</SkillTitle>
          </SkillCard>
        </ShineBorder>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <SkillCard>
            <SkillTitle>C</SkillTitle>
          </SkillCard>
        </ShineBorder>
      </SkillsContainer>
    </SkillsSection>

    <SkillsSection>
      <SkillCategory>Database</SkillCategory>
      <SkillsContainer>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <SkillCard>
            <SkillTitle>MySQL</SkillTitle>
          </SkillCard>
        </ShineBorder>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <SkillCard>
            <SkillTitle>MongoDB</SkillTitle>
          </SkillCard>
        </ShineBorder>
      </SkillsContainer>
    </SkillsSection>

    <SkillsSection>
      <SkillCategory>Development</SkillCategory>
      <SkillsContainer>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <SkillCard>
            <SkillTitle>HTML</SkillTitle>
          </SkillCard>
        </ShineBorder>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <SkillCard>
            <SkillTitle>CSS</SkillTitle>
          </SkillCard>
        </ShineBorder>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <SkillCard>
            <SkillTitle>JavaScript</SkillTitle>
          </SkillCard>
        </ShineBorder>
      </SkillsContainer>
    </SkillsSection>

    <SkillsSection>
      <SkillCategory>IDE's</SkillCategory>
      <SkillsContainer>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <SkillCard>
            <SkillTitle>Intellij Idea</SkillTitle>
          </SkillCard>
        </ShineBorder>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <SkillCard>
            <SkillTitle>VS Code</SkillTitle>
          </SkillCard>
        </ShineBorder>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <SkillCard>
            <SkillTitle>Eclipse</SkillTitle>
          </SkillCard>
        </ShineBorder>
      </SkillsContainer>
    </SkillsSection>

    <SkillsSection>
      <SkillCategory>Framework</SkillCategory>
      <SkillsContainer>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <SkillCard>
            <SkillTitle>Spring</SkillTitle>
          </SkillCard>
        </ShineBorder>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <SkillCard>
            <SkillTitle>Spring Boot</SkillTitle>
          </SkillCard>
        </ShineBorder>
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <SkillCard>
            <SkillTitle>Hibernate</SkillTitle>
          </SkillCard>
        </ShineBorder>
      </SkillsContainer>
    </SkillsSection>
  </Container>
);

export default Skills;