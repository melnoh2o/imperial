import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  height: clamp(16.25rem, calc(15.27rem + 4.88vw), 18.75rem);
  ${({ theme }) => theme.mixins.center};
  justify-content: flex-start;

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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

export const Title = styled(motion.h1)`
  position: absolute;
  top: 50%;
  left: 0;
  display: table-cell;
  vertical-align: middle;
  font-size: clamp(1.25rem, calc(1.15rem + 0.49vw), 1.5rem);
  text-transform: uppercase;
  background: var(--white);
  padding: clamp(1.25rem, calc(1.15rem + 0.49vw), 1.5rem) clamp(1.44rem, calc(1.34rem + 0.49vw), 1.69rem);
`;
