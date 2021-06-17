import styled from 'styled-components';
import * as colors from '../../config/colors';
import * as fonts from '../../config/fonts';
// import { respondToDown, respondToUp } from '../../config/respondTo';

export const Content = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  cursor: pointer;
`;

export const Icon = styled.span`
  font-size: 2rem;
  color: ${colors.secondColor};
  margin-right: 0.75rem;
`;

export const Arrow = styled.span`
  font-size: 2rem;
  color: ${colors.secondColor};
  margin-left: auto;
`;

export const HeaderTitle = styled.p`
  font-size: ${fonts.md};
  font-weight: 700;
  color: ${colors.textSecondColor};
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
  font-size: ${fonts.normal};
  font-weight: 500;
  color: ${colors.textThirdColor};
`;

export const Number = styled.span`
  color: ${colors.textThirdColor};
`;

export const Bar = styled.div`
  height: 5px;
  border-radius: 0.25rem;
  background-color: ${colors.colorBar};
`;

export const Percentage = styled.span`
  height: 5px;
  border-radius: 0.25px;

  display: block;
  background-color: ${colors.secondColor};
`;
