import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 clamp(1.25rem, calc(1.13rem + 0.61vw), 1.56rem) clamp(1.56rem, calc(1.44rem + 0.61vw), 1.88rem);
`;

export const TitleStack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 15px;
`;

export const Title = styled.h4`
  font-size: clamp(1.75rem, calc(1.65rem + 0.49vw), 2rem);
  line-height: clamp(1rem, calc(0.9rem + 0.49vw), 1.25rem);
  color: var(--black);
`;

export const Location = styled.p`
  ${({ theme }) => theme.mixins.center};
  gap: 4px;
  font-size: clamp(0.88rem, calc(0.83rem + 0.24vw), 1rem);
  font-weight: 700;
  letter-spacing: 1.1px;
  color: var(--black5);
`;

export const ListContainer = styled(motion.ul)`
  ${({ theme }) => theme.mixins.column};
  gap: 10px;
`;

export const Item = styled(motion.li)`
  p {
    font-size: clamp(0.88rem, calc(0.83rem + 0.24vw), 1rem);
    font-weight: 400;
    line-height: clamp(1rem, calc(0.9rem + 0.49vw), 1.25rem);
    color: var(--black5);
  }
`;
