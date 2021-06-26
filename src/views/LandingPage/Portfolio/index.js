import React, { useState } from 'react';
import SliderItem from '../../../components/SliderItem';

import {
  Container,
  Title,
  PortfolioContainer,
  Button,
  ButtonLink,
} from './styles';

import img1 from '../../../assets/img/Portfolio/viali.png';
import img2 from '../../../assets/img/Portfolio/cinelalune.png';

const data = [
  {
    title: 'ViALi',
    description:
      'Viali é um site onde você irá encontrar jogos, podcasts e mapas mentais sobre alguns temas biológicos.',
    demo: 'https://vialiofficial.web.app',
    link: 'https://github.com/william-james-pj/viali',
    img: img1,
  },
  {
    title: 'CinelaLune',
    description:
      'Projeto elaborado para a conclusão de curso (TCC). Tem como objetivo enriquecer a bagagem cutural da população',
    demo: 'https://william-james-pj.github.io/CinelaLune/',
    link: 'https://github.com/william-james-pj/CinelaLune',
    img: img2,
  },
];

function Portfolio() {
  const [maxItems, setMaxItems] = useState(4);

  const handle = () => {
    setMaxItems(maxItems + 2);
  };

  return (
    <Container id="portfolio">
      <Title>Portfolio</Title>
      <PortfolioContainer>
        {data.slice(0, maxItems).map((item, index) => {
          return <SliderItem item={item} key={item.title + index} />;
        })}
      </PortfolioContainer>
      <Button>
        {maxItems <= data.length ? (
          <ButtonLink onClick={handle}>Mostrar mais</ButtonLink>
        ) : null}
      </Button>
    </Container>
  );
}

export default Portfolio;
