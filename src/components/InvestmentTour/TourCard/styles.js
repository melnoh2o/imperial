import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TitleStack } from '../../styles';

export const FlexContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(2.81rem, calc(2.32rem + 2.44vw), 4.06rem);

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 85%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 100%;
  }
`;

export const Stack = styled(TitleStack)`
  align-items: center;

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 70%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 100%;
  }
`;

export const Grid = styled(motion.div)`
  display: grid;
  gap: var(--gap30);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
