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

  ${respondToUp.sm`
    margin-bottom: 4rem;
  `}
`;

export const PortfolioContainer = styled.div`
  max-width: 768px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  ${respondToUp.md`
    margin-left: auto;
    margin-right: auto;
  `}
`;
