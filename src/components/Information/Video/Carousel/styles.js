import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  width: 36%;
  height: 309px;
  max-height: 309px;
  overflow: hidden;
  ${({ theme }) => theme.mixins.fCenter};

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
    height: 280px;
    max-height: 280px;
  }
`;

export const CarouselStack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  width: 89%;
  gap: clamp(1.13rem, calc(1.03rem + 0.49vw), 1.38rem);
`;

export const CarouselTitle = styled(motion.p)`
  font-size: clamp(1.38rem, calc(1.28rem + 0.49vw), 1.63rem);
  line-height: clamp(1.63rem, calc(1.48rem + 0.73vw), 2rem);
  color: var(--black);
`;
