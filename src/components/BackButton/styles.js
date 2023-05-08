import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  position: absolute;
  top: -55px;
  left: 0;
  width: 40px;
  height: 40px;
  ${({ theme }) => theme.mixins.fCenter};
  color: var(--white);
  border: 1px solid var(--black);
  background: var(--black);
  transition: var(--transition);

  svg {
    width: 19px;
    height: 19px;
  }

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--black);
    background: var(--white);
  }
`;
