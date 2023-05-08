import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TitleStack } from '../../styles';

export const Wrapper = styled.section`
  padding: 100px 0 70px;
`;

export const FlexContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 65px;
`;

export const Stack = styled(TitleStack)`
  align-items: center;
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;
