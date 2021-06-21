import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  Container,
  FooterBg,
  FooterContainer,
  Data,
  Title,
  Subtitle,
  Links,
  Item,
  Link,
  Socials,
  Social,
  Copy,
} from './styles';

function Footer() {
  return (
    <Container>
      <FooterBg>
        <FooterContainer>
          <Data>
            <Title>William James</Title>
            <Subtitle>Desenvolvedor full stack</Subtitle>
          </Data>
          <Links>
            <Item>
              <Link to="/#home">Home</Link>
            </Item>
            <Item>
              <Link to="/#blog">Blog</Link>
            </Item>
            <Item>
              <Link to="/#portfolio">Portfolio</Link>
            </Item>
          </Links>
          <Socials>
            <Social target="_blank" href="https://github.com/william-james-pj">
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </Social>
            <Social
              target="_blank"
              href="https://www.linkedin.com/in/william-james-pj/"
            >
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </Social>
            <Social
              target="_blank"
              href="https://www.instagram.com/william._.james/"
            >
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </Social>
          </Socials>
        </FooterContainer>
        <Copy>&#169; William James. Todos os direitos reservados.</Copy>
      </FooterBg>
    </Container>
  );
}

export default Footer;
