import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Title, BlogContainer, Button, ButtonLink } from './styles';

import BlogSlider from '../../../components/BlogSlider';

const POSTS_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@william-james-pj';

function Blog() {
  const [isLoading, setLoading] = useState(true);
  const [dataBlog, setdataBlog] = useState([]);

  const fetchData = async () => {
    try {
      let items = [];
      const data = await axios.get(POSTS_URL);
      data.data.items.forEach((item) => {
        items.push({
          title: item.title,
          thumbnail: item.thumbnail,
          description: item.description.substr(4, 110),
        });
      });
      setdataBlog(items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <Container></Container>;

  return (
    <Container id="blog">
      <Title>Blog</Title>
      <BlogContainer>
        <BlogSlider dataBlog={dataBlog} />
      </BlogContainer>
      <Button>
        <ButtonLink
          target="_blank"
          href={'https://william-james-pj.medium.com'}
        >
          Mais posts
        </ButtonLink>
      </Button>
    </Container>
  );
}

export default Blog;
