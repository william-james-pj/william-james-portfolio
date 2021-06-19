import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import {
  Container,
  ImgContainer,
  Data,
  Title,
  Description,
  Button,
  ButtonLink,
  ButtonIcon,
  Icon,
} from './styles';

function SliderItem() {
  return (
    <Container>
      <ImgContainer></ImgContainer>
      <Data>
        <Title>Projeto</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          purus quis mauris
        </Description>
        <Button>
          <ButtonLink download="">
            Demo
            <ButtonIcon>
              <FontAwesomeIcon icon={faArrowUp} size="sm" />
            </ButtonIcon>
          </ButtonLink>
          <Icon>
            <FontAwesomeIcon icon={faGithubSquare} size="1x" />
          </Icon>
        </Button>
      </Data>
    </Container>
  );
}

export default SliderItem;
