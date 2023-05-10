import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TitleStack } from '../../styles';

export const FlexContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(2.81rem, calc(2.32rem + 2.44vw), 4.06rem);

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 85%;
    margin-inline: auto;
  }
`;

export const Stack = styled(TitleStack)`
  align-items: center;
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }
`;
