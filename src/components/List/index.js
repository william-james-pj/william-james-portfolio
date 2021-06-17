import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import {
  Content,
  Header,
  HeaderTitle,
  ListContainer,
  Title,
  Data,
  Name,
  Number,
  Bar,
  Percentage,
  Icon,
  Arrow,
} from './styles';

function List({ data, icon }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Content>
      <Header onClick={handleOpen}>
        <Icon>
          <FontAwesomeIcon icon={icon} size="sm" />
        </Icon>
        <HeaderTitle>{data.title}</HeaderTitle>
        <Arrow>
          <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} size="sm" />
        </Arrow>
      </Header>
      <ListContainer active={open}>
        {data.list.map((item) => {
          return (
            <Data key={item.name}>
              <Title>
                <Name>{item.name}</Name>
                <Number>{item.number}</Number>
              </Title>
              <Bar>
                <Percentage style={{ width: item.number }}></Percentage>
              </Bar>
            </Data>
          );
        })}
      </ListContainer>
    </Content>
  );
}

List.propTypes = {
  data: PropTypes.object.isRequired,
  icon: PropTypes.object.isRequired,
};

export default List;
