import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const HeaderWrapper = styled(motion.header)`
  background: transparent;
  position: fixed;
  top: 0px;
  right: 0;
  left: 0;
  z-index: 100;
  padding: 24px 0;
  transition: background 0.3s ease-in, top 0.6s linear;

  @media (min-width: 992px) {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  ${(props) =>
    props.$isWhite &&
    css`
      background: var(--white);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    `}
`;

export const NavbarWrapper = styled.ul`
  ${({ theme }) => theme.mixins.column};
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 8px;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const NavBarItem = styled(motion.li)`
  position: relative;
  padding: 5px 15px;
`;

export const NavBarLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  font-size: 12px;
  line-height: 18px;
  font-weight: 300;
  letter-spacing: 2px;
  opacity: ${(props) => (props.$isActive ? '1' : ' 0.7')};
  color: var(--white);
  text-transform: uppercase;
  transition: var(--transition);

  &::before {
    content: '';
    position: absolute;
    width: ${(props) => (props.$isActive ? '100%' : '0')};
    z-index: -1;
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

  ${(props) =>
    props.$isWhite &&
    css`
      color: var(--black);
      font-weight: 500;

      &::before {
        border-bottom: 1px solid var(--black);
      }
    `}
`;
// TODO:
export const SocialIconLink = styled.a`
  border: 1px solid transparent;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: var(--white);
  font-size: 14px;

  ${({ theme }) => theme.mixins.fCenter};
  transition: var(--transition);

  &:is(:hover, :focus, :active) {
    background: var(--orange2);
    border-color: var(--orange2);
    color: var(--black);
  }
`;
