import styled from 'styled-components';
import * as fonts from '../../config/fonts';
import { respondToDown, respondToUp } from '../../config/respondTo';

export const Container = styled.div`
  max-width: 400px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.8fr 1.2fr;
  cursor: pointer;

  ${respondToUp.sm`
    grid-template-rows: 1fr 1fr;
  `}
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: auto;
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 70%;
  height: auto;

  border-radius: 0.5rem;

  justify-self: center;
  align-self: center;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 1.2rem;
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

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${respondToUp.xs`
    text-align: left;
  `}
`;
