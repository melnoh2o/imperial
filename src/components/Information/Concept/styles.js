import styled, { css } from 'styled-components';
import { Description } from '../../styles';
import { motion } from 'framer-motion';

export const FlexContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  align-items: center;
  gap: var(--gap95);

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 85%;
    margin-inline: auto;
  }
`;

export const ConceptStack = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  place-items: center;
  gap: var(--gap40);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }
`;

export const ConceptImgWrapper = styled(motion.div)`
  /* width: 570px;
  height: 370px; */

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 350px;
    height: 230px;

    &:first-child {
      order: 2;
    }
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 400px;
    height: 250px;
  }

  ${(props) =>
    props.$isOrderChange &&
    css`
      order: 1;
    `}
`;

export const ConceptImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ConceptTitleStack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 10px;
`;

export const ConceptNumber = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  color: var(--black);
`;

export const ConceptTitle = styled.h2`
  font-size: var(--fs33);
  line-height: var(--fs33);
  font-weight: 700;
  color: var(--black);
`;

export const ConceptDescription = styled(Description)`
  text-align: start;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    text-align: center;
  }
`;
