import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IoIosQuote } from 'react-icons/io';

export const Wrapper = styled(motion.div)`
  width: 76%;
  height: 305px;
  background-color: var(--white);
  box-shadow: 0 30px 50px var(--black-bg4);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
    height: 280px;
  }
`;

export const Stack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  align-items: center;
  text-align: center;
  gap: clamp(0.94rem, calc(0.69rem + 1.22vw), 1.56rem);
  padding: clamp(1.88rem, calc(1.63rem + 1.22vw), 2.5rem) clamp(1.88rem, calc(1.39rem + 2.44vw), 3.13rem)
    clamp(2rem, calc(1.61rem + 1.95vw), 3rem);
`;

export const QuoteIcon = styled(IoIosQuote)`
  font-size: 22px;
  color: var(--black);

  &::before {
    content: '"';
  }

  @media ${({ theme }) => theme.bp.bpTinyS} {
    font-size: 14px;
  }
`;

export const Blockquote = styled.blockquote`
  font-size: var(--fs16);
  line-height: var(--ln32);
  font-weight: 400;
  color: var(--gray2);
`;

export const Name = styled.p`
  font-size: var(--fs20);
  line-height: var(--ln32);
  font-weight: 700;
  color: var(--black);
`;
