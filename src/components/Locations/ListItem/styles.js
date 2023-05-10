import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FlexContainer = styled(motion.div)`
  min-height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--gap30);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 85%;
    margin-inline: auto;
  }
`;
