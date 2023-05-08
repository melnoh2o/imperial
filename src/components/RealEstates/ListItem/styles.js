import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 878px;
  ${({ theme }) => theme.mixins.column};
  justify-content: space-between;
  gap: 50px;
`;

export const Grid = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;
