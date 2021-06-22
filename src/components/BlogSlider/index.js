import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import BlogItem from '../BlogItem';

import { Container, Icon } from './styles';

function BlogSlider({ dataBlog }) {
  return (
    <Container>
      <Carousel
        plugins={[
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <Icon disabled={0}>
                  <FontAwesomeIcon icon={faAngleLeft} size="1x" />
                </Icon>
              ),
              arrowLeftDisabled: (
                <Icon disabled={1}>
                  <FontAwesomeIcon icon={faAngleLeft} size="1x" />
                </Icon>
              ),
              arrowRight: (
                <Icon disabled={0}>
                  <FontAwesomeIcon icon={faAngleRight} size="1x" />
                </Icon>
              ),
              arrowRightDisabled: (
                <Icon disabled={1}>
                  <FontAwesomeIcon icon={faAngleRight} size="1x" />
                </Icon>
              ),
              addArrowClickHandler: true,
            },
          },
        ]}
      >
        {dataBlog.map((item) => {
          return <BlogItem key={item.title} data={item} />;
        })}
      </Carousel>
    </Container>
  );
}

BlogSlider.propTypes = {
  dataBlog: PropTypes.array.isRequired,
};

export default BlogSlider;
