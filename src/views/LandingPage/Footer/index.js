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
              <Link>Home</Link>
            </Item>
            <Item>
              <Link>Blog</Link>
            </Item>
            <Item>
              <Link>Portfolio</Link>
            </Item>
          </Links>
          <Socials>
            <Social>
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </Social>
            <Social>
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </Social>
            <Social>
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
