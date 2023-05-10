import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ContentWrapper } from '../../styles';

export const Wrapper = styled(ContentWrapper)`
  ${({ theme }) => theme.mixins.column};
  gap: var(--gap30);

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 85%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 100%;
  }
`;

export const Group = styled(motion.div)`
  ${({ theme }) => theme.mixins.center};
  justify-content: space-between;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    flex-direction: column;
    gap: 20px;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    gap: 30px;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    flex-direction: row;
  }
`;
