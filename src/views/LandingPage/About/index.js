import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import img from '../../../assets/img/img2.jpeg';

import {
  Container,
  AboutTitle,
  AboutContainer,
  AboutData,
  AboutDescription,
  AboutButton,
  AboutButtonIcon,
  AboutButtonLink,
  AboutImg,
} from './styles';

function About() {
  return (
    <Container id="about">
      <AboutTitle>Sobre mim</AboutTitle>
      <AboutContainer>
        <AboutImg src={img} />
        <AboutData>
          <AboutDescription>
            Sou estudante de engenharia da computação e estou iniciando minha
            carreira como desenvolvedor. Meu principal objetivo é compartilhar
            meu progresso e meus aprendizados enquanto me torno um desenvolvedor
            full stack.
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
