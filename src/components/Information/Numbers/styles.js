import styled from 'styled-components';

import { ContentStack } from '../../styles';
import { motion } from 'framer-motion';

const bg = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683133338/number-bg_ao5i3d.jpg';

export const Wrapper = styled.section`
  padding: 70px 0;
`;

export const FlexContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.apart}
  gap: 20px;
`;

export const Stack = styled(ContentStack)`
  width: 41%;
`;

export const NumbersWrapper = styled(motion.div)`
  position: relative;
  width: 50%;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10px;
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
`;
