import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faGripHorizontal,
  faHome,
  faUser,
  faFileCode,
  faImage,
  faThLarge,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  NavContainer,
  NavLogo,
  NavMenu,
  NavList,
  NavItem,
  NavIcons,
  NavLink,
  NavClose,
  NavBtns,
  NavToggle,
  IconTheme,
} from './styles';

function Nav({ scroll, themeToggler, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container active={scroll}>
      <NavContainer>
        <NavLogo to="/#home">William James</NavLogo>
        <NavMenu menuOpen={menuOpen}>
          <NavList>
            <NavItem onClick={handleMenu}>
              <NavLink to="/#home">
                <NavIcons>
                  <FontAwesomeIcon icon={faHome} size="lg" />
                </NavIcons>
                Home
              </NavLink>
            </NavItem>
            <NavItem onClick={handleMenu}>
              <NavLink to="/#about">
                <NavIcons>
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </NavIcons>
                Sobre
              </NavLink>
            </NavItem>
            <NavItem onClick={handleMenu}>
              <NavLink to="/#blog">
                <NavIcons>
                  <FontAwesomeIcon icon={faThLarge} size="lg" />
                </NavIcons>
                Blog
              </NavLink>
            </NavItem>
            <NavItem onClick={handleMenu}>
              <NavLink to="/#skills">
                <NavIcons>
                  <FontAwesomeIcon icon={faFileCode} size="lg" />
                </NavIcons>
                Skills
              </NavLink>
            </NavItem>
            <NavItem onClick={handleMenu}>
              <NavLink to="/#portfolio">
                <NavIcons>
                  <FontAwesomeIcon icon={faImage} size="lg" />
                </NavIcons>
                Portfolio
              </NavLink>
            </NavItem>
          </NavList>
          <NavClose onClick={handleMenu}>
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </NavClose>
        </NavMenu>

        <NavBtns>
          <IconTheme onClick={themeToggler}>
            <FontAwesomeIcon
              icon={theme === 'light' ? faMoon : faSun}
              size="sm"
            />
          </IconTheme>

          <NavToggle onClick={handleMenu}>
            <FontAwesomeIcon icon={faGripHorizontal} size="lg" />
          </NavToggle>
        </NavBtns>
      </NavContainer>
    </Container>
  );
}

Nav.propTypes = {
  scroll: PropTypes.bool.isRequired,
  themeToggler: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Nav;
