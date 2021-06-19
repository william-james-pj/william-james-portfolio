import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import SliderItem from '../SliderItem';

import { Container, Icon } from './styles';

function Slider() {
  return (
    <Container>
      <Carousel
        plugins={[
          'infinite',
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <Icon>
                  <FontAwesomeIcon icon={faAngleLeft} size="1x" />
                </Icon>
              ),
              arrowRight: (
                <Icon>
                  <FontAwesomeIcon icon={faAngleRight} size="1x" />
                </Icon>
              ),
              addArrowClickHandler: true,
            },
          },
        ]}
      >
        <SliderItem key={1212} />
        <SliderItem key={1313} />
        <SliderItem key={1414} />
      </Carousel>
    </Container>
  );
}

export default Slider;
