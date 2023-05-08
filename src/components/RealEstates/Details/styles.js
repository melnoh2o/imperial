import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 70px 0;
  background-color: var(--white6);
`;

export const LoaderWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Group = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
`;

export const BodyWrapper = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 40px;
  background: var(--white);
`;

export const FlexContainer = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 50px;
`;
