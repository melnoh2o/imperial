import styled from 'styled-components';

import { ContentStack, Description } from '../../styles';
import { motion } from 'framer-motion';

const bg = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683133338/number-bg_ao5i3d.jpg';

export const FlexContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.apart}
  gap: 20px;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 85%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 70%;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 100%;
    flex-direction: row;
  }
`;

export const Stack = styled(ContentStack)`
  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 41%;
  }
`;

export const NumbersWrapper = styled(motion.div)`
  position: relative;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10px;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 50%;
  }
`;

export const NumberContentWrapper = styled.div`
  position: relative;
  display: grid;
  background: white;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const NumberDescription = styled(Description)`
  @media ${({ theme }) => theme.bp.bpTinyS} {
    text-align: center;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    text-align: left;
  }
`;
