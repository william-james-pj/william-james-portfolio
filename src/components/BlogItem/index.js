import React from 'react';
import PropTypes from 'prop-types';

import { Container, Data, Title, Description, Img } from './styles';

function BlogItem({ data }) {
  return (
    <Container>
      <Img src={data.thumbnail} />
      <Data>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
      </Data>
    </Container>
  );
}

BlogItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogItem;
