import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(motion.section)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 33px;
  border-bottom: 1px solid var(--white2);
`;

export const Description = styled(motion.p)`
  max-width: 80%;
  font-size: 13px;
  line-height: 26px;
  font-weight: 400;
  color: var(--white3);
  text-align: left;
`;

export const GetInTouchLink = styled(NavLink)`
  position: relative;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 4.5px;
  color: var(--white);
  text-transform: uppercase;
  transition: var(--transition);

  &::before {
    content: '';
    position: absolute;
    width: 0;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid var(--white);
    transition: var(--transition);
  }

  &:hover {
    opacity: 1;
    &::before {
      width: 100%;
    }
  }
`;

export const FooterLink = styled(motion.a)`
  display: inline-block;
  ${({ theme }) => theme.mixins.fontSize12};
  color: var(--white);
  opacity: 1;
  transition: opacity 0.3s ease-in;

  &:hover {
    opacity: 0.7;
  }
`;
