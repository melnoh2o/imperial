import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  position: relative;
  ${({ theme }) => theme.mixins.column};
  gap: 32px;
`;

export const Title = styled(motion.h5)`
  font-size: var(--fs24);
  line-height: 20px;
  color: var(--black);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 76%;
  }
`;
