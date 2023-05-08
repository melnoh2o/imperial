import styled, { css } from 'styled-components';
import { Description } from '../../styles';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  padding: 70px 0;
`;

export const FlexContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  align-items: center;
  gap: 95px;
`;

export const ConceptStack = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  place-items: center;
  gap: 40px;
`;

export const ConceptImgWrapper = styled(motion.div)`
  width: 570px;
  height: 370px;

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
  font-size: 33px;
  line-height: 33px;
  font-weight: 700;
  color: var(--black);
`;

export const ConceptDescription = styled(Description)`
  text-align: start;
`;
