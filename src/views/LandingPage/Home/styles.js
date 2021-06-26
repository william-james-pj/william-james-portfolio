import styled from 'styled-components';
import * as fonts from '../../../config/fonts';
import { respondToDown, respondToUp } from '../../../config/respondTo';
import { HashLink } from 'react-router-hash-link';

export const Container = styled.div`
  padding: 3rem 0 4rem;

  ${respondToUp.sm`
    padding: 4rem 0 4rem;
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
  color: ${({ theme }) => theme.secondColor};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.secondColorAlt};
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
  fill: ${({ theme }) => theme.secondColor};

  ${respondToUp.xs`
    width: 270px;
  `}

  ${respondToUp.md`
    width: 360px;
  `}
`;

export const HomeBlobImg = styled.image`
  width: 140px;
`;

export const HomeData = styled.div`
  grid-column: 1/3;

  ${respondToUp.xs`
    grid-column: initial;
  `}
`;

export const HomeTitle = styled.p`
  font-size: ${fonts.lg};
  color: ${({ theme }) => theme.h1};
  font-weight: 700;
  margin-bottom: 0.5rem;
  user-select: none;
`;

export const HomeSubTitle = styled.p`
  font-size: ${fonts.md};
  color: ${({ theme }) => theme.h2};
  font-weight: 500;
  margin-bottom: 0.75rem;
  user-select: none;
`;

export const HomeDescription = styled.p`
  font-size: ${fonts.sm};
  color: ${({ theme }) => theme.h3};
  margin-bottom: 2rem;
  user-select: none;
`;

export const HomeScroll = styled.div`
  ${respondToDown.sm`
    display: none;
  `}
`;

export const HomeScrollButton = styled(HashLink)`
  color: ${({ theme }) => theme.secondColor};
  transition: 0.3s;
  cursor: pointer;
  user-select: none;

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
  color: ${({ theme }) => theme.h1};
  font-weight: 500;
  margin-right: 0.25rem;
  margin-left: 0.5rem;
`;

export const HomeScrollArrow = styled.div`
  font-size: 1rem;
`;
