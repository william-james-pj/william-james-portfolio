import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faGripHorizontal,
  faHome,
  faUser,
  faFileCode,
  faImage,
  faThLarge,
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
} from './styles';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <NavContainer>
        <NavLogo>William</NavLogo>
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
            <FontAwesomeIcon icon={faTimes} size="md" />
          </NavClose>
        </NavMenu>

        <NavBtns>
          <NavToggle onClick={handleMenu}>
            <FontAwesomeIcon icon={faGripHorizontal} size="lg" />
          </NavToggle>
        </NavBtns>
      </NavContainer>
    </Container>
  );
}

export default Nav;