import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Button = styled(motion.button)`
  position: relative;
  width: 25px;
  height: 25px;
  ${({ theme }) => theme.mixins.column};
  gap: 5px;
  border: none;
  background: transparent;
  z-index: 150;

  &:is(:hover, :active, :focus) {
    outline: none;
  }

  span {
    position: absolute;
    top: 14px;
    display: block;
    height: 1.5px;
    width: 100%;
    background: ${(props) =>
      props.$isWhite ? (props.$isOpen ? 'var(--white)' : 'var(--black)') : 'var(--white)'};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    height: 1.5px;
    width: 100%;
    background: ${(props) =>
      props.$isWhite ? (props.$isOpen ? 'var(--white)' : 'var(--black)') : 'var(--white)'};
  }

  &::before {
    top: 7px;
    transform: ${(props) =>
      props.$isOpen ? 'rotate(45deg) translate(3.4px, 3.8px)' : 'rotate(0) translate(0px, 0px)'};
    transition: transform 0.4s ease-in-out;
  }

  span {
    transform: ${(props) => (props.$isOpen ? 'scaleY(0)' : 'scaleY(1)')};
    transition: transform 0.2s ease-in-out;
  }

  &::after {
    top: 21px;
    transform: ${(props) =>
      props.$isOpen ? 'rotate(-45deg) translate(6.5px, -6.2px)' : 'rotate(0) translate(0px, 0px)'};
    transition: transform 0.4s ease-in-out;
  }
`;
