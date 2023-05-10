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
`;

export const Stack = styled(ContentStack)`
  width: 41%;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
  }
`;

export const NumbersWrapper = styled(motion.div)`
  position: relative;
  width: 50%;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10px;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
  }
`;

export const NumberContentWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  svg {
    width: 100%;
    height: 185px;
    /* fill: var(--white); */

    .base {
      fill: white;
      width: 100%;
      height: 100%;
    }

    mask {
      width: 100%;
      height: 100%;

      .coming-alpha {
        fill: white;
        width: 100%;
        height: 100%;
      }

      .number {
        font-size: 70px;
        font-weight: 700;
      }

      .title {
        font-size: 14px;
        letter-spacing: 3.5px;
        font-weight: 300;
      }
    }
  }

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;

    svg {
      height: 125px;

      mask {
        .number {
          font-size: 35px;
        }

        .title {
          font-size: 14px;
          letter-spacing: 3.5px;
        }
      }
    }
  }
`;

export const NumberDescription = styled(Description)`
  @media ${({ theme }) => theme.bp.bpTinyS} {
    text-align: center;
  }
`;
