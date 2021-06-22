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
  user-select: none;

  ${respondToUp.sm`
    margin-bottom: 4rem;
  `}
`;

export const BlogContainer = styled.div`
  max-width: 768px;
  margin-inline: 1.5rem;

  ${respondToUp.sm`
    margin-inline: auto;
    padding-inline: 3rem;
  `}

  ${respondToUp.md`
    padding: 0;
  `}
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  background-color: ${({ theme }) => theme.secondColor};
  color: ${({ theme }) => theme.white};
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  :hover {
    background-color: ${({ theme }) => theme.secondColorAlt};
  }
`;
