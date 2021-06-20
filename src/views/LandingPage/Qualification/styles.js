import styled from 'styled-components';
import * as fonts from '../../../config/fonts';
import { respondToUp } from '../../../config/respondTo';

export const Container = styled.div`
  padding: 2rem 0 4rem;

  ${respondToUp.sm`
    padding: 6rem 0 4rem;
  `}
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.h1};
  font-size: ${fonts.lg};
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;

  ${respondToUp.sm`
    margin-bottom: 4rem;
  `}
`;

export const QualificationContainer = styled.div`
  max-width: 768px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  ${respondToUp.sm`
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${fonts.md};
  font-weight: 700;
  cursor: pointer;
  color: ${(props) =>
    props.active ? ({ theme }) => theme.h2 : ({ theme }) => theme.secondColor};

  -webkit-tap-highlight-color: transparent;

  :hover {
    color: ${({ theme }) => theme.secondColor};
  }
`;

export const Icon = styled.span`
  font-size: 1.8rem;
  margin-right: 0.25rem;
`;

export const Sections = styled.div`
  ${respondToUp.sm`
    display: grid;
    grid-template-columns: 0.6fr;
    justify-content: center;
  `}
`;

export const Content = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
`;
