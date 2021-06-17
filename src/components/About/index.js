import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  AboutTitle,
  AboutContainer,
  ImgContainer,
  AboutData,
  AboutDescription,
  AboutButton,
  AboutButtonIcon,
  AboutButtonLink,
} from './styles';

function About() {
  return (
    <Container>
      <AboutTitle>Sobre mim</AboutTitle>
      <AboutContainer>
        <ImgContainer></ImgContainer>
        <AboutData>
          <AboutDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis purus quis mauris condimentum molestie vel non purus. In
            convallis purus quis mauris condimentum molestie vel non purus.
          </AboutDescription>
          <AboutButton>
            <AboutButtonLink download="">
              Download CV
              <AboutButtonIcon>
                <FontAwesomeIcon icon={faFileDownload} size="sm" />
              </AboutButtonIcon>
            </AboutButtonLink>
          </AboutButton>
        </AboutData>
      </AboutContainer>
    </Container>
  );
}

export default About;
