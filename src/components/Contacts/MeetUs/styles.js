import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 70px 0;
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30p;
`;

export const MeetUsCard = styled(motion.div)`
  position: relative;
  cursor: pointer;
  background: ${(props) => `url(${props.imgUrl})`} center/cover no-repeat;
  overflow: hidden;
  padding: 47px 50px 40px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
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
    background-color: rgba(17, 17, 17, 0.6);
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

export const MeetUsTitleStack = styled.p`
  position: relative;
  ${({ theme }) => theme.mixins.fontSize16};
  ${({ theme }) => theme.mixins.column};
  gap: 24px;
  font-weight: 400;
  z-index: 12;
  color: #7e7d7d;
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
  color: #7e7d7d;
`;
