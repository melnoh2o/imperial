import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  width: 76%;
  height: 305px;
  background-color: var(--white);
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
`;

export const Stack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  align-items: center;
  text-align: center;
  gap: 25px;
  padding: 40px 50px 48px 50px;
`;

export const QuoteIcon = styled.span`
  font-size: 22px;
  color: var(--black);

  &::before {
    content: '"';
  }
`;

export const Blockquote = styled.blockquote`
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  color: var(--gray2);
`;

export const Name = styled.p`
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
  color: var(--black);
`;
