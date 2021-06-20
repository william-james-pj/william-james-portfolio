import styled from 'styled-components';
import * as fonts from '../../../config/fonts';
import { respondToDown, respondToUp } from '../../../config/respondTo';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 99;
  background: ${({ theme }) => theme.primaryColor};

  box-shadow: ${(props) =>
    props.active ? '0 -1px 4px rgba(0,0,0,0.15)' : 'none'};

  ${respondToUp.sm`
    top: 0;
  `}

  ${respondToDown.sm`
    bottom: 0;
  `}
`;

export const NavContainer = styled.div`
  max-width: 986px;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 1.5rem;
  margin-right: 1.5rem;

  ${respondToUp.sm`
    height: calc(3rem + 1.5rem);
    column-gap: 1rem;
  `}

  ${respondToUp.md`
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const NavLogo = styled.a`
  font-weight: 500;
  color: ${({ theme }) => theme.h1};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  :hover {
    color: ${({ theme }) => theme.secondColorAlt};
  }
`;

export const NavMenu = styled.div`
  ${respondToDown.sm`
    position: fixed;
    bottom: ${(props) => (props.menuOpen ? '0' : '-100%')};
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.primaryColor};
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  `}

  ${respondToDown.xs`
    padding: 2rem 0.25rem 4rem;
  `}

  ${respondToUp.sm`
    margin-left: auto;
  `}
`;

export const NavList = styled.ul`
  ${respondToDown.sm`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  `}

  ${respondToDown.xs`
    column-gap: 0;
  `}

  ${respondToUp.sm`
    display: flex;
    column-gap: 2rem;
  `}
`;

export const NavItem = styled.li`
  -webkit-tap-highlight-color: transparent;
`;

export const NavIcons = styled.div`
  margin-bottom: 5px;
  ${respondToUp.sm`
      display: none;
  `}
`;

export const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${fonts.sm};
  color: ${({ theme }) => theme.h1};
  font-weight: 500;

  cursor: pointer;
  user-select: none;

  :hover {
    color: ${({ theme }) => theme.secondColor};
  }
`;

export const NavClose = styled.div`
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.h1};
  -webkit-tap-highlight-color: transparent;

  :hover {
    color: ${({ theme }) => theme.secondColor};
  }

  ${respondToUp.sm`
      display: none;
  `}
`;

export const NavBtns = styled.div`
  display: flex;
  align-items: center;
`;

export const NavToggle = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.h1};

  font-size: 1.1rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  :hover {
    color: ${({ theme }) => theme.secondColor};
  }

  ${respondToUp.sm`
      display: none;
  `}
`;

export const IconTheme = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.h1};
  margin-right: 1rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  :hover {
    color: ${({ theme }) => theme.secondColor};
  }
`;
