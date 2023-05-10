import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 20%;
  height: 100%;

  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: calc(100% - 17px);
    top: 17px;
    left: 1px;
    border: 1px solid var(--white8);
    z-index: -1;
  }

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 56%;
  }
`;

export const ListContainer = styled(motion.ul)`
  ${({ theme }) => theme.mixins.column};
  align-items: flex-start;
  overflow: auto;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    min-height: 134px;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    min-height: 306px;
  }
`;

export const Item = styled(motion.li)`
  position: relative;
  z-index: 10;
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 1.5px;
  font-weight: 300;
  color: ${(props) => (props.$isActive ? 'var(--black)' : 'var(--gray2)')};
  border: none;
  opacity: 1;
  padding-right: 15px;
  padding-left: ${(props) => (props.$isActive ? '10px' : '0')};
  background-color: var(--white);
  transition: color 0.3s ease-in, padding-left 0.3s ease-in;

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    width: 0;
    height: 0;
    width: 0;
    border-top: 5px solid var(--black);
    border-right: 5px solid transparent;
    opacity: ${(props) => (props.$isActive ? '1' : '0')};
    visibility: ${(props) => (props.$isActive ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease-in, visibility 0.3s ease-in;
  }
`;
