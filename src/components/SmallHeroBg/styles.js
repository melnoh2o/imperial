import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  height: 300px;
  ${({ theme }) => theme.mixins.center};
  justify-content: flex-start;
  background: ${(props) => `url(${props.$imgUrl})`} center/cover no-repeat;
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
  font-size: 1.5rem;
  text-transform: uppercase;
  background: var(--white);
  padding: 24px 27px;
`;
