import React from 'react';

import { Container, Title, BlogContainer } from './styles';

import BlogItem from '../../../components/BlogItem';

function Blog() {
  return (
    <Container id="blog">
      <Title>Blog</Title>
      <BlogContainer>
        <BlogItem />
        <BlogItem />
      </BlogContainer>
    </Container>
  );
}

export default Blog;
