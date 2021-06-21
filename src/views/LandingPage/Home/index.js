import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMouse, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import img from '../../../assets/img/img1.png';

import {
  Container,
  HomeContainer,
  HomeContent,
  HomeSocial,
  HomeSocialLink,
  HomeImg,
  HomeBlob,
  HomeBlobImg,
  HomeData,
  HomeTitle,
  HomeSubTitle,
  HomeDescription,
  HomeScroll,
  HomeScrollButton,
  HomeScrollName,
  HomeScrollMouse,
  HomeScrollArrow,
} from './styles';

function Home() {
  return (
    <Container id="home">
      <HomeContainer>
        <HomeContent>
          <HomeSocial>
            <HomeSocialLink
              target="_blank"
              href="https://github.com/william-james-pj"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </HomeSocialLink>
            <HomeSocialLink
              target="_blank"
              href="https://www.linkedin.com/in/william-james-pj/"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </HomeSocialLink>
            <HomeSocialLink
              target="_blank"
              href="https://www.instagram.com/william._.james/"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </HomeSocialLink>
          </HomeSocial>

          <HomeImg>
            <HomeBlob
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M52.9,-59.1C69.3,-49.4,83.6,-33.3,85.8,-15.9C88,1.6,78,20.4,66.6,36.7C55.2,53,42.2,66.8,27.1,70.7C12,74.5,-5.4,68.5,-21.7,61.7C-38,54.8,-53.2,47.2,-55.7,35.6C-58.2,24.1,-48,8.7,-44.3,-7.1C-40.7,-22.9,-43.5,-39,-37.2,-50.5C-30.9,-61.9,-15.4,-68.6,1.4,-70.3C18.3,-72,36.6,-68.7,52.9,-59.1Z"
                  transform="translate(100 100)"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M52.9,-59.1C69.3,-49.4,83.6,-33.3,85.8,-15.9C88,1.6,78,20.4,66.6,36.7C55.2,53,42.2,66.8,27.1,70.7C12,74.5,-5.4,68.5,-21.7,61.7C-38,54.8,-53.2,47.2,-55.7,35.6C-58.2,24.1,-48,8.7,-44.3,-7.1C-40.7,-22.9,-43.5,-39,-37.2,-50.5C-30.9,-61.9,-15.4,-68.6,1.4,-70.3C18.3,-72,36.6,-68.7,52.9,-59.1Z"
                  transform="translate(100 100)"
                />
                <HomeBlobImg x="45" y="35" xlinkHref={img} />
              </g>
            </HomeBlob>
          </HomeImg>

          <HomeData>
            <HomeTitle>Olá, eu sou William James</HomeTitle>
            <HomeSubTitle>Desenvolvedor full stack Jr</HomeSubTitle>
            <HomeDescription>
              Seja bem vindo ao meu site pessoal.
            </HomeDescription>
          </HomeData>
        </HomeContent>
        <HomeScroll>
          <HomeScrollButton to="/#about">
            <HomeScrollMouse>
              <FontAwesomeIcon icon={faMouse} size="sm" />
            </HomeScrollMouse>
            <HomeScrollName>Scroll down</HomeScrollName>
            <HomeScrollArrow>
              <FontAwesomeIcon icon={faArrowDown} size="sm" />
            </HomeScrollArrow>
          </HomeScrollButton>
        </HomeScroll>
      </HomeContainer>
    </Container>
  );
}

export default Home;
