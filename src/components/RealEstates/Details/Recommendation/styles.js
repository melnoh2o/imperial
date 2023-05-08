import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  position: relative;
  ${({ theme }) => theme.mixins.column};
  gap: 32px;
`;

export const Title = styled(motion.h5)`
  font-size: 1.5rem;
  line-height: 20px;
  color: var(--black);
`;
