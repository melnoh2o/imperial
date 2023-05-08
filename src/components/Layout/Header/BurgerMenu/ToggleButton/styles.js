import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Button = styled(motion.button)`
  position: relative;
  width: 25px;
  ${({ theme }) => theme.mixins.column};
  gap: 5px;
  border: none;
  background: transparent;
  z-index: 150;

  &:is(:hover, :active, :focus) {
    outline: none;
  }

  span {
    display: block;
    height: 1.5px;
    width: 100%;
    background: ${(props) => (props.$isWhite ? 'var(--black)' : 'var(--white)')};
  }

  .first {
    transform-origin: 0% 0%;
    transform: ${(props) =>
      props.$isOpen ? 'rotate(45deg) translate(-3px, -1.5px)' : 'rotate(0) translate(0px)'};
    transition: transform 0.4s ease-in-out;
  }

  .second {
    transform: ${(props) => (props.$isOpen ? 'scaleY(0)' : 'scaleY(1)')};
    transition: transform 0.2s ease-in-out;
  }

  .third {
    transform-origin: 0% 100%;
    transform: ${(props) =>
      props.$isOpen ? 'rotate(-45deg) translate(-1px, 0px)' : 'rotate(0) translate(0px, 0px)'};
    transition: transform 0.4s ease-in-out;
  }
`;
