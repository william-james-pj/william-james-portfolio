import styled from 'styled-components';
import * as colors from '../../../config/colors';
import * as fonts from '../../../config/fonts';
import { respondToDown, respondToUp } from '../../../config/respondTo';

export const Container = styled.div`
  padding: 2rem 0 4rem;

  ${respondToUp.sm`
    padding: 6rem 0 4rem;
  `}
`;

export const AboutTitle = styled.p`
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

export const AboutContainer = styled.div`
  max-width: 768px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  display: grid;
  gap: 1.5rem;

  ${respondToUp.xs`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${respondToUp.md`
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const ImgContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 0.5rem;
  background: ${colors.textPrimaryColor};
  margin-inline: auto;

  ${respondToDown.xs`
    margin-inline: auto;
  `}
`;

export const AboutImg = styled.img`
  max-width: 100%;
  height: auto;

  justify-self: center;
  align-self: center;
`;

export const AboutData = styled.div``;

export const AboutDescription = styled.p`
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: ${fonts.normal};
  color: ${colors.textSecondColor};
  line-height: 140%;
  user-select: none;
  ${respondToUp.xs`
    text-align: left;
  `}
`;

export const AboutButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const AboutButtonIcon = styled.span`
  font-size: 1.25rem;
  margin-left: 0.5rem;
  transition: 0.3s;
`;

export const AboutButtonLink = styled.a`
  display: inline-flex;
  align-items: center;

  background-color: ${colors.secondColor};
  color: ${colors.white};
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  :hover {
    background-color: ${colors.thirdColor};
  }
`;

export const Teste = styled.p``;
