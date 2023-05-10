import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ContentWrapper } from '../../styles';

export const Wrapper = styled(ContentWrapper)`
  ${({ theme }) => theme.mixins.column};
  gap: 30px;
`;

export const Group = styled(motion.div)`
  ${({ theme }) => theme.mixins.center};
  justify-content: space-between;
  gap: 20px;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    flex-direction: column;
  }
`;
