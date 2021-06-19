import styled from 'styled-components';
import * as colors from '../../config/colors';
import * as fonts from '../../config/fonts';
import { respondToDown, respondToUp } from '../../config/respondTo';

export const Container = styled.div`
  width: auto;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1.2fr;

  ${respondToUp.sm`
    grid-template-rows: 1.2fr 0.8fr;
  `}
`;

export const ImgContainer = styled.div`
  width: 90%;
  height: auto;
  border-radius: 0.5rem;
  background: ${colors.textPrimaryColor};
  margin-inline: auto;
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

  padding: 1.2rem;
`;

export const Title = styled.p`
  font-size: ${fonts.md};
  font-weight: 700;
  color: ${colors.textSecondColor};
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
  color: ${colors.textThirdColor};
  line-height: 140%;
  user-select: none;
  ${respondToUp.xs`
    text-align: left;
  `}
`;
