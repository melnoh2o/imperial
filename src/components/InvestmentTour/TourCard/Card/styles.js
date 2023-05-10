import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.p)`
  min-height: 270px;
  ${({ theme }) => theme.mixins.fCenter};
  font-size: 16px;
  line-height: clamp(1.56rem, calc(1.39rem + 0.85vw), 2rem);
  font-weight: 400;
  color: var(--gray2);
  text-align: center;
  padding: clamp(0.94rem, calc(0.82rem + 0.61vw), 1.25rem) clamp(1.88rem, calc(1.68rem + 0.98vw), 2.38rem);
  background-color: var(--gray4);
  box-shadow: 0 30px 50px var(--black-bg4);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    min-height: 230px;
  }
`;
