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

function Nav({ scroll }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container active={scroll}>
      <NavContainer>
        <NavLogo>William James</NavLogo>
        <NavMenu menuOpen={menuOpen}>
          <NavList>
            <NavItem onClick={handleMenu}>
              <NavLink>
                <NavIcons>
                  <FontAwesomeIcon icon={faHome} size="lg" />
                </NavIcons>
                Menu
              </NavLink>
            </NavItem>
            <NavItem onClick={handleMenu}>
              <NavLink>
                <NavIcons>
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </NavIcons>
                Sobre
              </NavLink>
            </NavItem>
            <NavItem onClick={handleMenu}>
              <NavLink>
                <NavIcons>
                  <FontAwesomeIcon icon={faThLarge} size="lg" />
                </NavIcons>
                Blog
              </NavLink>
            </NavItem>
            <NavItem onClick={handleMenu}>
              <NavLink>
                <NavIcons>
                  <FontAwesomeIcon icon={faFileCode} size="lg" />
                </NavIcons>
                Skills
              </NavLink>
            </NavItem>
            <NavItem onClick={handleMenu}>
              <NavLink>
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
          <IconTheme>
            <FontAwesomeIcon icon={faMoon} size="sm" />
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
};

export default Nav;
