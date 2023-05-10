import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30p;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 85%;
    margin-inline: auto;
  }
`;

export const MeetUsCard = styled(motion.div)`
  position: relative;
  cursor: pointer;
  background: ${(props) => `url(${props.imgUrl})`} center/cover no-repeat;
  overflow: hidden;
  padding: clamp(2.31rem, calc(2.07rem + 1.22vw), 2.94rem) clamp(2.5rem, calc(2.26rem + 1.22vw), 3.13rem)
    clamp(1.88rem, calc(1.63rem + 1.22vw), 2.5rem);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--gray4);
    z-index: 11;
    opacity: 1;
    transition: opacity 0.3s ease-in, visibility 0.3s ease-in;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--gray5);
    z-index: 10;
  }

  &:hover {
    p,
    a {
      color: var(--white);
    }

    span {
      background-color: var(--white);
    }

    &::before {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const MeetUsTitleStack = styled.div`
  position: relative;
  ${({ theme }) => theme.mixins.fontSize16};
  ${({ theme }) => theme.mixins.column};
  gap: 24px;
  font-weight: 400;
  z-index: 12;
  color: var(--gray2);
  transition: color 0.3s ease-in;
`;

export const Separator = styled.span`
  display: inline-block;
  width: 70px;
  height: 1px;
  background-color: var(--black);
  transition: background-color 0.3s ease-in;
`;

export const MeetUsTitle = styled.p`
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 2.2px;
  font-weight: 500;
  color: var(--black);
  transition: color 0.3s ease-in;
`;

export const MeetUsLink = styled.a`
  ${({ theme }) => theme.mixins.fontSize16};
  font-weight: 400;
  color: var(--gray2);
`;
