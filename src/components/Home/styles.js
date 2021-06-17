import styled from 'styled-components';
import * as colors from '../../config/colors';
import * as fonts from '../../config/fonts';
import { respondToDown, respondToUp } from '../../config/respondTo';

export const Container = styled.div`
  padding: 2rem 0 4rem;

  ${respondToUp.sm`
    padding: 2rem 0 4rem;
  `}

  ${respondToUp.md`
    padding: 0;
  `}
`;

export const HomeContainer = styled.div`
  max-width: 768px;
  display: grid;
  gap: 1rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  ${respondToUp.md`
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const HomeContent = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 3fr;
  align-items: center;

  ${respondToUp.xs`
    grid-template-columns: max-content 1fr 1fr;
    padding-top: 3.5rem;
  `}

  ${respondToUp.md`
    padding-top: 8rem;
  `}
`;

export const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  justify-content: center;
  row-gap: 1rem;

  ${respondToUp.md`
    transform: translateX(-4rem);
  `}
`;

export const HomeSocialLink = styled.a`
  font-size: 1.25rem;
  color: ${colors.secondColor};
  cursor: pointer;

  :hover {
    color: ${colors.textFourthColor};
  }
`;

export const HomeImg = styled.div`
  ${respondToUp.xs`
    order: 1;
    justify-self: center;
  `}
`;

export const HomeBlob = styled.svg`
  width: 200px;
  fill: ${colors.secondColor};

  ${respondToUp.xs`
    width: 270px;
  `}

  ${respondToUp.md`
    width: 320px;
  `}
`;

export const HomeBlobImg = styled.div``;

export const HomeData = styled.div`
  grid-column: 1/3;

  ${respondToUp.xs`
    grid-column: initial;
  `}
`;

export const HomeTitle = styled.p`
  font-size: ${fonts.lg};
  color: ${colors.textPrimaryColor};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const HomeSubTitle = styled.p`
  font-size: ${fonts.md};
  color: ${colors.textSecondColor};
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

export const HomeDescription = styled.p`
  font-size: ${fonts.sm};
  color: ${colors.textThirdColor};
  margin-bottom: 2rem;
`;

export const HomeScroll = styled.div`
  ${respondToDown.sm`
    display: none;
  `}
`;

export const HomeScrollButton = styled.a`
  color: ${colors.secondColor};
  transition: 0.3s;
  cursor: pointer;

  display: inline-flex;
  align-items: center;

  :hover {
    transform: translateY(0.25rem);
  }

  ${respondToUp.xs`
    margin-left: 3rem;
  `}
`;

export const HomeScrollMouse = styled.div`
  font-size: 1.8em;
`;

export const HomeScrollName = styled.span`
  font-size: ${fonts.sm};
  color: ${colors.textPrimaryColor};
  font-weight: 500;
  margin-right: 0.25rem;
  margin-left: 0.5rem;
`;

export const HomeScrollArrow = styled.div`
  font-size: 1rem;
`;
