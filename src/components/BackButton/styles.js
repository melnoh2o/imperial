import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  position: absolute;
  top: -55px;
  left: 0;
  width: clamp(2.19rem, calc(2.07rem + 0.61vw), 2.5rem);
  height: clamp(2.19rem, calc(2.07rem + 0.61vw), 2.5rem);
  ${({ theme }) => theme.mixins.fCenter};
  color: var(--white);
  border: 1px solid var(--black);
  background: var(--black);
  transition: var(--transition);

  svg {
    width: clamp(1rem, calc(0.93rem + 0.37vw), 1.19rem);
    height: clamp(1rem, calc(0.93rem + 0.37vw), 1.19rem);
  }

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--black);
    background: var(--white);
  }
`;
