import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 25px 30px 25px;
`;

export const TitleStack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 15px;
`;

export const Title = styled.h4`
  font-size: 2rem;
  line-height: 20px;
  color: var(--black);
`;

export const Location = styled.p`
  ${({ theme }) => theme.mixins.center};
  gap: 4px;
  font-size: 16px;
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
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: var(--black5);
  }
`;
