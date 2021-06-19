import styled from 'styled-components';
import * as colors from '../../../config/colors';
import * as fonts from '../../../config/fonts';
import { respondToUp } from '../../../config/respondTo';

export const Container = styled.div`
  padding-top: 2rem;
`;

export const FooterBg = styled.div`
  background-color: ${colors.secondColor};
  padding: 2rem 0 3rem;

  ${respondToUp.sm`
    padding: 3rem 0 3.5rem;
  `}
`;

export const FooterContainer = styled.div`
  max-width: 768px;
  display: grid;
  gap: 1rem;
  row-gap: 3.5rem;

  margin-inline: 1.5rem;

  ${respondToUp.xs`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${respondToUp.sm`
    grid-template-columns: repeat(3, 1fr);
    margin-inline: auto;
    padding-inline: 2.5rem;
  `}

  ${respondToUp.md`
    padding: 0;
  `}
`;

export const Data = styled.div``;

export const Title = styled.p`
  font-size: ${fonts.normal};
  margin-bottom: 0.25rem;
  color: ${colors.white};
`;

export const Subtitle = styled.span`
  font-size: ${fonts.sm};
  color: ${colors.white};
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  ${respondToUp.sm`
    flex-direction: row;
    column-gap: 2rem;
  `}
`;

export const Item = styled.li``;

export const Link = styled.a`
  color: ${colors.white};
  :hover {
    color: ${colors.thirdColor};
  }
`;

export const Socials = styled.div`
  display: flex;

  ${respondToUp.sm`
    justify-self: flex-end;
  `}
`;

export const Social = styled.div`
  font-size: 1.25rem;
  margin-right: 1.5rem;
  color: ${colors.white};

  :hover {
    color: ${colors.thirdColor};
  }
`;

export const Copy = styled.p`
  font-size: ${fonts.sm};
  text-align: center;
  color: ${colors.primaryColor};
  margin-top: 3rem;

  ${respondToUp.sm`
    margin-top: 4.5rem;
  `}
`;
