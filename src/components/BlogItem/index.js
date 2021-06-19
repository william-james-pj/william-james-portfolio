import React from 'react';

import { Container, ImgContainer, Data, Title, Description } from './styles';

function BlogItem() {
  return (
    <Container>
      <ImgContainer></ImgContainer>
      <Data>
        <Title>POST</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          purus quis mauris
        </Description>
      </Data>
    </Container>
  );
}

export default BlogItem;
