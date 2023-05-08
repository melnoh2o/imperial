import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 70px 0;
`;

export const FilterWrapper = styled(motion.div)`
  min-height: 738px;
  max-height: 880px;
  min-width: 300px;
  ${({ theme }) => theme.mixins.column};
  gap: 35px;
  padding: 30px;
  overflow: auto;
  background: var(--gray4);
`;

export const FilterStack = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 10px;
`;

export const FilterTitle = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: 1.6px;
  color: var(--black);
`;

export const FilterMobileWrapper = styled.div`
  background: var(--gray4);
  padding: 30px;
`;

export const FilterMobileTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: var(--black);
  padding-bottom: 20px;
  border-bottom: 1px solid var(--black);
`;
