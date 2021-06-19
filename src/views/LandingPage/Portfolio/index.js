import React from 'react';

import Slider from '../../../components/Slider';

import { Container, Title, PortfolioContainer } from './styles';

function Portfolio() {
  return (
    <Container>
      <Title>Portfolio</Title>
      <PortfolioContainer>
        <Slider />
      </PortfolioContainer>
    </Container>
  );
}

export default Portfolio;
