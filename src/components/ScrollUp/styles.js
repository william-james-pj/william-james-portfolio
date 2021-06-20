import styled from 'styled-components';
import * as colors from '../../config/colors';
// import * as fonts from '../../../config/fonts';
// import { respondToUp } from '../../../config/respondTo';

export const Container = styled.a`
  position: fixed;
  right: 1rem;
  bottom: ${(props) => (props.active ? '5rem' : '-20%')};
  background-color: ${colors.secondColor};
  opacity: 0.8;
  padding: 0.3rem 0.6rem;
  border-radius: 0.4rem;
  z-index: 98;
  transition: 0.4s;
  cursor: pointer;

  :hover {
    background-color: ${colors.thirdColor};
  }
`;

export const Icon = styled.span`
  font-size: 1.5rem;
  color: ${colors.primaryColor};
  -webkit-tap-highlight-color: transparent;
`;
