import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.section)`
  ${({ theme }) => theme.mixins.column};
  padding: 70px 0;
  gap: 30px;
`;

export const TitleStack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 18px;
`;

export const Subtitle = styled(motion.p)`
  ${({ theme }) => theme.mixins.fontSize14}
  letter-spacing: 4.5px;
  font-weight: 300;
  color: var(--black4);
`;

export const Title = styled(motion.h4)`
  ${({ theme }) => theme.mixins.fontSize40};
  letter-spacing: 0.9px;
  color: var(--black4);
`;

export const Group = styled(motion.div)`
  ${({ theme }) => theme.mixins.center};
  justify-content: space-between;
  gap: 20;
`;
