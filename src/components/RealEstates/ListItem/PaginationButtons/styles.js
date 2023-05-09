import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  ${({ theme }) => theme.mixins.fCenter};
  gap: clamp(0.5rem, calc(0.45rem + 0.24vw), 0.63rem);
`;

export const Button = styled(motion.button)`
  position: relative;
  display: inline-block;
  text-align: center;
  width: 30px;
  height: 30px;
  font-size: 12px;
  line-height: 28px;
  background-color: ${(props) => (props.$isActive ? 'var(--black)' : 'var(--white)')};
  border: 1px solid var(--black);
  color: ${(props) => (props.$isActive ? 'var(--white)' : 'var(--black)')};
  transition: border 0.3s ease-in, background-color 0.3s ease-in, color 0.3s ease-in;

  &:is(:hover, :active, :focus) {
    background-color: var(--black);
    color: var(--white);
  }
`;
