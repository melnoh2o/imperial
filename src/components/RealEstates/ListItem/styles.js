import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 878px;
  ${({ theme }) => theme.mixins.column};
  justify-content: space-between;
  gap: clamp(2.81rem, calc(2.69rem + 0.61vw), 3.13rem);
`;

export const Grid = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }
`;
