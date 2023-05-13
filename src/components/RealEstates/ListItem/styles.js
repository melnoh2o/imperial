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
  gap: 30px;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const NotFoundTitle = styled(motion.p)`
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 1.1px;
  color: var(--black);
`;
