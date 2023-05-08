import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FlexContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.center};
  flex-direction: row;
  gap: 40px;
`;

export const Separator = styled(motion.span)`
  display: inline-block;
  width: 50%;
  height: 1px;
  background-color: var(--black);
`;

export const LinkBtn = styled(motion.button)`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  line-height: 18px;
  letter-spacing: 1.1px;
  color: var(--purple);
  border: none;
  background: none;
  transition: var(--transition);

  &::after {
    content: '';
    height: 1px;
    width: 0;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    background: var(--purple);
    transition: var(--transition);
  }

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--dark-purple);

    &::after {
      width: 100%;
    }
  }
`;
