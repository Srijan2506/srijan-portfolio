// src/components/ShineBorder.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the animation
const shine = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Create a styled div with the shine animation
const Border = styled.div`
  display: inline-block;
  padding: 5px; /* Adjust the padding to make the border thinner */
  border-radius: 8px;
  background: linear-gradient(90deg, ${props => props.color.join(', ')});
  background-size: 200% 100%;
  animation: ${shine} 2s linear infinite;
  overflow: hidden; /* Ensure content is contained within the border */
`;

const Content = styled.div`
  background-color: white; /* Background color for inner content */
  padding: 10px; /* Padding for inner content */
  border-radius: 5px; /* Inner content border radius */
`;

const ShineBorder = ({ children, className, color }) => {
  return (
    <Border className={className} color={color}>
      <Content>{children}</Content>
    </Border>
  );
};

export default ShineBorder;