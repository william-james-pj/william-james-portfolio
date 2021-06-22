import styled from 'styled-components';
// import * as fonts from '../../../config/fonts';
// import { respondToUp } from '../../../config/respondTo';

export const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const Icon = styled.span`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.secondColor};
  color: ${(props) =>
    props.disabled
      ? ({ theme }) => theme.scrollBar
      : ({ theme }) => theme.secondColor};
  cursor: ${(props) => (props.disabled ? 'none' : 'pointer')};
  -webkit-tap-highlight-color: transparent;
`;
