import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import {
  Container,
  Img,
  Data,
  Title,
  Description,
  Button,
  ButtonLink,
  ButtonIcon,
  Icon,
} from './styles';

function SliderItem({ item }) {
  return (
    <Container>
      <Img src={item.img} />
      <Data>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        <Button>
          <ButtonLink target="_blank" href={item.demo}>
            Demo
            <ButtonIcon>
              <FontAwesomeIcon icon={faArrowUp} size="sm" />
            </ButtonIcon>
          </ButtonLink>
          <Icon target="_blank" href={item.link}>
            <FontAwesomeIcon icon={faGithubSquare} size="1x" />
          </Icon>
        </Button>
      </Data>
    </Container>
  );
}

SliderItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SliderItem;
