import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const pulse = keyframes`
    0% {
        transform: scale(1,1);
        box-shadow:  0 0 0 0 var(--black2);
    }

    25% {
        transform: scale(1.1,1.1);
        box-shadow:  1px 3px 85px -10px  var(--black2);
    }

    50% {
        transform: scale(1,1);
        box-shadow:  0 0 0 0 var(--black2);
    }
`;

export const ButtonWrapper = styled(motion.button)`
  position: fixed;
  bottom: 7%;
  right: 7%;
  width: 60px;
  height: 60px;
  z-index: 100;
  ${({ theme }) => theme.mixins.fCenter};
  color: var(--white);
  border-radius: 50%;
  border: 1px solid var(--black2);
  background: var(--black2);
  box-shadow: 0 0 20px 0 var(--gray5);
  transition: var(--transition);
  animation: ${pulse} 2.2s linear infinite;

  svg {
    width: 30px;
    height: 30px;
  }

  &:is(:hover, :active, :focus) {
    animation: none;
  }
`;
