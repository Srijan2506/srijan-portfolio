// src/components/ShimmerButton.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Button = styled.a`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(90deg, #A07CFE, #FE8FB5, #FFBE7B);
  background-size: 200% 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  animation: ${shimmer} 2s linear infinite;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  text-decoration: none;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ShimmerButton = ({ children, href, className }) => {
  return (
    <Button href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </Button>
  );
};

export default ShimmerButton;
