import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FlexContainer = styled(motion.div)`
  min-height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }
`;
