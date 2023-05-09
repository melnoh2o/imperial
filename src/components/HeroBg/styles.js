import { NavLink } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  min-height: 100vh;
  position: relative;
  ${({ theme }) => theme.mixins.fCenter};
  background: ${(props) => `url(${props.$imgUrl}) center/cover no-repeat`};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.4;
  background: var(--black-bg);
`;

export const ContentWrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;
`;

export const Subtitle = styled(motion.p)`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 4.5px;
  font-weight: 300;
  color: var(--white);
  text-transform: uppercase;
`;

export const Title = styled(motion.h1)`
  font-size: clamp(2.13rem, calc(1.64rem + 2.44vw), 3.38rem);
  line-height: clamp(2.38rem, calc(1.94rem + 2.2vw), 3.5rem);
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;
`;
// TODO:
export const Link = styled(NavLink)`
  ${({ theme }) => theme.mixins.fontSize16};
  font-weight: 400;
  color: ${(props) => (props.$isActive ? 'var(--orange2)' : 'var(--white4)')};
  position: relative;

  &::after {
    content: '';
    width: ${(props) => (props.$isActive ? '100%' : '0')};
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid var(--orange2);
    transition: var(--transition);
  }

  &:is(:hover, :active, :focus) {
    color: var(--orange2);
    &::after {
      width: 100%;
    }
  }
`;
// TODO:
export const Separator = styled(MdArrowForwardIos)`
  color: var(--white4);
`;
