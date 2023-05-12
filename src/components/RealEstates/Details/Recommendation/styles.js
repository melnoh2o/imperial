import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  position: relative;
  ${({ theme }) => theme.mixins.column};
  gap: 32px;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    max-width: 337px;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    max-width: 430px;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    max-width: 100%;
    width: 100%;
  }
`;

export const Title = styled(motion.h5)`
  font-size: var(--fs24);
  line-height: 20px;
  color: var(--black);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 76%;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 100%;
  }
`;

export const Container = styled(motion.div)`
  @media ${({ theme }) => theme.bp.bpSmall} {
    max-width: 100%;
    width: 100%;
  }
`;
