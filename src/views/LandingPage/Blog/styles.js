import styled from 'styled-components';
import * as colors from '../../../config/colors';
import * as fonts from '../../../config/fonts';
import { respondToUp } from '../../../config/respondTo';

export const Container = styled.div`
  padding: 2rem 0 4rem;

  ${respondToUp.sm`
    padding: 6rem 0 4rem;
  `}
`;

export const Title = styled.p`
  color: ${colors.textPrimaryColor};
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
  margin-inline: 2rem;

  display: grid;
  gap: 1.5rem;

  ${respondToUp.sm`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${respondToUp.sm`
    margin-inline: auto;
  `}
`;
