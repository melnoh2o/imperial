import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  width: 36%;
  height: 309px;
  max-height: 309px;
  overflow: hidden;
  ${({ theme }) => theme.mixins.fCenter};
  margin-left: auto;
`;

export const CarouselStack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  width: 89%;
  gap: 22px;
`;

export const CarouselTitle = styled(motion.p)`
  font-size: 26px;
  line-height: 32px;
  color: var(--black);
`;
