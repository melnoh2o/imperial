import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ContentWrapper } from '../../styles';

export const Wrapper = styled(ContentWrapper)`
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
  gap: clamp(2.5rem, calc(2.26rem + 1.22vw), 3.13rem);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 70%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 100%;
    flex-direction: row;
  }
`;

export const BodyWrapper = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(1.25rem, calc(1.01rem + 1.22vw), 1.88rem);
  background: var(--white);
`;

export const FlexContainer = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(2.5rem, calc(2.26rem + 1.22vw), 3.13rem);

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 65%;
  }
`;
