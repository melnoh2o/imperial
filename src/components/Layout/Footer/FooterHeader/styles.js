import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(motion.section)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 33px;
  border-bottom: 1px solid var(--white2);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
    place-items: center;
    gap: 28px;
  }
`;

export const FlexContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 2.375rem;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    align-items: center;
    gap: 1rem;
  }
`;

export const Description = styled(motion.p)`
  max-width: 80%;
  font-size: 13px;
  line-height: 26px;
  font-weight: 400;
  color: var(--white3);
  text-align: left;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    text-align: center;
  }
`;

export const Stack = styled.div`
  ${({ theme }) => theme.mixins.column};
  align-items: flex-end;
  justify-content: flex-start;
  gap: 2.375rem;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    align-items: center;
    gap: 1rem;
  }
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

export const ListContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.45rem;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    align-items: center;
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
