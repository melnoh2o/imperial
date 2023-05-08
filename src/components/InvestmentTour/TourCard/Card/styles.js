import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.p)`
  min-height: 270px;
  ${({ theme }) => theme.mixins.fCenter};
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  color: var(--gray2);
  text-align: center;
  padding: 20px 38px;
  background-color: var(--gray4);
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
`;
