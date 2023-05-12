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

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 70%;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 100%;
  }
`;

export const ConceptStack = styled.div`
  display: grid;
  text-align: center;
  place-items: center;
  gap: var(--gap40);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ConceptImgWrapper = styled(motion.div)`
  span {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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

  @media ${({ theme }) => theme.bp.bpSmall} {
    &:first-child {
      order: initial;
    }

    ${(props) =>
      props.$isOrderChange &&
      css`
        order: 1 !important;
      `}
  }

  @media ${({ theme }) => theme.bp.bpMedium} {
    width: 100%;
    height: 370px;
  }
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
