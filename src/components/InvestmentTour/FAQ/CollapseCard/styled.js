import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)``;

export const CollapseButton = styled.button`
  position: relative;
  width: 100%;
  ${({ theme }) => theme.mixins.apart};
  border: none;
  border-top: 1px solid var(--gray);
  background: var(--white);
  padding: 27px 50px 27px 0;

  span {
    font-size: 20px;
    line-height: 1.35;
    font-weight: 500;
    color: var(--black);
  }

  svg {
    font-size: 30px;
    transform: ${(props) => (props.$isOpen ? 'rotate(-45deg)' : 'rotate(0deg)')};
    opacity: ${(props) => (props.$isOpen ? '0.5' : '1')};
    transition: all ease-in-out 0.2s;
  }
`;

export const CollapseText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--gray2);
  margin-bottom: 20px;
`;
