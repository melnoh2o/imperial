import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FilterMobileListContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 5px;
  margin-bottom: 15px;
`;
