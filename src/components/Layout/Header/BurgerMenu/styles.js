import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BackgroundWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 300px;
  ${({ theme }) => theme.mixins.fCenter};
  padding: 40px;
  background: var(--black);
`;
