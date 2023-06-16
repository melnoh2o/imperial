import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const NavbarWrapper = styled(motion.ul)`
  ${({ theme }) => theme.mixins.column};
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 8px;

  @media (min-width: 1175px) {
    flex-direction: row;
  }
`;

export const NavBarItem = styled(motion.li)`
  position: relative;
  padding: clamp(0rem, calc(-0.12rem + 0.61vw), 0.31rem) 15px;
`;

export const NavBarLink = styled.button`
  position: relative;
  display: inline-block;
  font-size: clamp(0.69rem, calc(0.66rem + 0.12vw), 0.75rem);
  line-height: clamp(0.88rem, calc(0.78rem + 0.49vw), 1.13rem);
  font-weight: 300;
  letter-spacing: 2px;
  opacity: ${(props) => (props.$isActive ? '1' : ' 0.7')};
  color: var(--white);
  text-transform: uppercase;
  text-align: left;
  border: none;
  background: transparent;
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

  &:is(:hover, :active, :focus) {
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

export const ChangeLangBtn = styled(motion.button)`
  width: 34px;
  ${({ theme }) => theme.mixins.fontSize14}
  font-weight: 400;
  letter-spacing: 2px;
  opacity: 0.7;
  color: var(--white);
  border: 1px solid var(--white);
  background: transparent;
  padding: clamp(0rem, -0.12rem + 0.61vw, 0.31rem) 8px;
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    opacity: 1;
    color: var(--black);
    background: var(--white);
  }

  ${(props) =>
    props.$isWhite &&
    css`
      color: var(--black);
      border-color: var(--black);

      &:is(:hover, :active, :focus) {
        color: var(--white);
        border-color: var(--black);
        background: var(--black);
      }
    `}

  @media (max-width: 1175px) {
    position: absolute;
    top: 21px;
    left: 40px;
  }
`;
