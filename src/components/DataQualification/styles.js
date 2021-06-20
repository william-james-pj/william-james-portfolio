import styled from 'styled-components';
import * as fonts from '../../config/fonts';
// import { respondToDown, respondToUp } from '../../config/respondTo';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
`;

export const Data = styled.div`
  order: ${(props) => (props.order ? '3' : '1')};
`;

export const Title = styled.p`
  font-size: ${fonts.normal};
  font-weight: 500;
  color: ${({ theme }) => theme.h2};
  margin-bottom: 0.25rem;
  user-select: none;
`;

export const Subtitle = styled.span`
  display: inline-block;
  font-size: ${fonts.sm};
  color: ${({ theme }) => theme.h3};
  margin-bottom: 1rem;
  user-select: none;
`;

export const Calendar = styled.div`
  font-size: ${fonts.xs};
  color: ${({ theme }) => theme.h4};
  user-select: none;
`;

export const Icon = styled.span`
  margin-right: 0.5rem;
`;

export const RounderContainer = styled.div`
  order: 2;
`;

export const Rounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${({ theme }) => theme.secondColor};
  border-radius: 50%;
`;

export const Line = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.secondColor};
  transform: translate(6px, -7px);
  display: ${(props) => (props.active ? '' : 'none')};
`;

export const Trash = styled.div`
  order: ${(props) => (props.order ? '1' : '3')};
`;
