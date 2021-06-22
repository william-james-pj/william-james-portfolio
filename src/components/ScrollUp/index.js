import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { Container, Icon } from './styles';

function ScrollUp({ scroll }) {
  return (
    <Container active={scroll ? 1 : 0} to="/#home">
      <Icon>
        <FontAwesomeIcon icon={faArrowUp} size="sm" />
      </Icon>
    </Container>
  );
}

ScrollUp.propTypes = {
  scroll: PropTypes.bool.isRequired,
};

export default ScrollUp;
