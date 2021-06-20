import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown, respondToUp } from '../../config/respondTo';

export const Container = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.8fr 1.2fr;
  overflow: hidden;

  ${respondToUp.xs`
    grid-template-columns: 0.9fr 1.1fr;
    grid-template-rows: 1fr;
  `}
`;

export const ImgContainer = styled.div`
  width: 70%;
  height: auto;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.h1};
  margin-inline: auto;

  ${respondToDown.xs`
    margin-inline: auto;
    width: 90%;
  `}
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;

  justify-self: center;
  align-self: center;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-inline: 1rem;
`;

export const Title = styled.p`
  font-size: ${fonts.md};
  font-weight: 700;
  color: ${({ theme }) => theme.h2};
  margin-bottom: 0.5rem;
  user-select: none;

  ${respondToDown.xs`
    margin-bottom: 1rem;
    margin-top: 1rem;
  `}
`;

export const Description = styled.p`
  margin-bottom: 1.5rem;
  font-size: ${fonts.normal};
  color: ${({ theme }) => theme.h3};
  line-height: 140%;
  user-select: none;
  ${respondToUp.xs`
    text-align: left;
  `}
`;

export const Button = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonIcon = styled.span`
  font-size: 1.25rem;
  margin-left: 0.5rem;
  transition: 0.3s;
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

  :hover {
    background-color: ${({ theme }) => theme.secondColorAlt};
  }
`;

export const Icon = styled.span`
  font-size: 2.25rem;
  color: ${({ theme }) => theme.secondColorAlt};
  margin-left: 2rem;
  transition: 0.3s;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  :hover {
    color: ${({ theme }) => theme.secondColorLighter};
  }
`;
