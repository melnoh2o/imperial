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
  padding: clamp(1.25rem, calc(1.08rem + 0.85vw), 1.69rem) clamp(1.88rem, calc(1.39rem + 2.44vw), 3.13rem)
    clamp(1.25rem, calc(1.08rem + 0.85vw), 1.69rem) 0;

  span {
    font-size: clamp(1rem, calc(0.9rem + 0.49vw), 1.25rem);
    line-height: clamp(1.25rem, calc(1.01rem + 1.22vw), 1.88rem);
    font-weight: 500;
    color: var(--black);
    text-align: left;
  }

  svg {
    font-size: clamp(1.38rem, calc(1.18rem + 0.98vw), 1.88rem);
    transform: ${(props) => (props.$isOpen ? 'rotate(-45deg)' : 'rotate(0deg)')};
    opacity: ${(props) => (props.$isOpen ? '0.5' : '1')};
    transition: all ease-in-out 0.2s;

    @media ${({ theme }) => theme.bp.bpTinyS} {
      position: absolute;
      right: 5px;
    }
  }
`;

export const CollapseText = styled.p`
  font-size: clamp(0.88rem, calc(0.83rem + 0.24vw), 1rem);
  font-weight: 400;
  color: var(--gray2);
  margin-bottom: clamp(0.94rem, calc(0.82rem + 0.61vw), 1.25rem);
`;
