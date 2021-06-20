import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  Data,
  Title,
  Subtitle,
  Calendar,
  Icon,
  RounderContainer,
  Rounder,
  Line,
  Trash,
} from './styles';

function DataQualification({ data, right, last }) {
  return (
    <Container>
      <Data order={right % 2 === 0 ? 0 : 1}>
        <Title>{data.title}</Title>
        <Subtitle>{data.where}</Subtitle>
        <Calendar>
          <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} size="sm" />
          </Icon>
          {data.date}
        </Calendar>
      </Data>
      <RounderContainer>
        <Rounder></Rounder>
        <Line active={last ? 0 : 1}></Line>
      </RounderContainer>
      <Trash order={right % 2 === 0 ? 0 : 1}></Trash>
    </Container>
  );
}

DataQualification.propTypes = {
  data: PropTypes.object.isRequired,
  right: PropTypes.number.isRequired,
  last: PropTypes.bool.isRequired,
};

export default DataQualification;
