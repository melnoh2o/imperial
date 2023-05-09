import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TitleStack } from '../../styles';

export const InnerWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 420px;
  ${({ theme }) => theme.mixins.apart};
  overflow: hidden;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ImageWrapper = styled(motion.div)`
  width: 58%;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InnerTitleStack = styled(TitleStack)`
  width: 36%;
  align-items: flex-start;
  gap: clamp(0.94rem, calc(0.82rem + 0.61vw), 1.25rem);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
  }
`;

export const InnerTitle = styled(motion.h3)`
  font-size: 26px;
  font-weight: 700;
  color: var(--black);
`;

export const Button = styled(motion.button)`
  position: relative;
  ${({ theme }) => theme.mixins.center};
  gap: 4px;
  font-size: 11px;
  line-height: 30px;
  letter-spacing: 2px;
  font-weight: 500;
  color: var(--black);
  border: none;
  background: none;
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    outline: none;
    &::before {
      width: 100%;
    }
  }

  svg {
    font-size: 16px;
  }

  &::before {
    content: '';
    width: 0;
    height: 1px;
    position: absolute;
    bottom: 2px;
    left: 0;
    background: var(--black);
    transition: var(--transition);
  }
`;

export const YearLine = styled.p`
  position: relative;
  width: 100%;
  font-size: 12px;
  line-height: 26px;
  font-weight: 300;
  color: var(--black);
  text-align: end;

  &::after {
    content: '';
    height: 1px;
    width: 85px;
    display: inline-block;
    /* position: absolute; */
    /* / top: 50%; */
    z-index: 70;
    margin-left: 15px;
    background-color: var(--black);
  }

  @media ${({ theme }) => theme.bp.bpTinyS} {
    ${({ theme }) => theme.mixins.center};
    justify-content: flex-end;
  }
`;

export const Space = styled.span`
  display: block;
  height: 1rem;
  min-height: 1rem;
`;
