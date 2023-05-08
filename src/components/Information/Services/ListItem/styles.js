import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

export const Card = styled(motion.div)`
  height: 100%;
  ${({ theme }) => theme.mixins.column};
  gap: 16px;
  background-color: var(--white5);
  padding: 48px 15px 38px 50px;
`;

export const CardTitle = styled.p`
  position: relative;
  font-size: 11px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: 1.6px;
  color: var(--black);
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: calc(100% + 15px);
    transform: translateY(-50%);
    width: 50px;
    height: 1px;
    background: var(--black);
  }
`;

export const CardDescription = styled.p`
  ${({ theme }) => theme.mixins.fontSize16};
  font-weight: 500;
  letter-spacing: 1.6px;
  color: var(--gary2);
`;
