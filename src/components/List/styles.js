import styled from 'styled-components';
import * as fonts from '../../config/fonts';
// import { respondToDown, respondToUp } from '../../config/respondTo';

export const Content = styled.div`
  -webkit-tap-highlight-color: transparent;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  cursor: pointer;
`;

export const Icon = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.secondColor};
  margin-right: 0.75rem;
`;

export const Arrow = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.secondColor};
  margin-left: auto;
`;

export const HeaderTitle = styled.p`
  font-size: ${fonts.md};
  font-weight: 700;
  color: ${({ theme }) => theme.h2};
  user-select: none;
`;

export const ListContainer = styled.div`
  display: grid;
  gap: 1.5rem;

  height: ${(props) => (props.active ? 'max-content' : '0')};
  overflow: ${(props) => (props.active ? 'none' : 'hidden')};
  margin-bottom: ${(props) => (props.active ? '2.5rem' : '0')};
`;

export const Data = styled.div``;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const Name = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.h3};
  user-select: none;
`;

export const Number = styled.span`
  color: ${({ theme }) => theme.h3};
  user-select: none;
`;

export const Bar = styled.div`
  height: 5px;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.secondColorLighter};
`;

export const Percentage = styled.span`
  height: 5px;
  border-radius: 0.25px;

  display: block;
  background-color: ${({ theme }) => theme.secondColor};
`;
