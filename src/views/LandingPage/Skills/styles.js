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

export const SkillsContainer = styled.div`
  max-width: 768px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  display: grid;
  gap: 1.5rem;
  row-gap: 0;

  ${respondToUp.xs`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${respondToUp.sm`
    margin-left: auto;
    margin-right: auto;
    padding-inline: 1.5rem;
  `}

  ${respondToUp.md`
    padding-inline: 0;
  `}
`;
