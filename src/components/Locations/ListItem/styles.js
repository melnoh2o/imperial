import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FlexContainer = styled(motion.div)`
  min-height: 100vh;
  position: relative;
  display: grid;
  gap: var(--gap30);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
    width: 80%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 85%;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
