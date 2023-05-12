import { motion } from 'framer-motion';
import styled from 'styled-components';

const bg = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683133338/number-bg_ao5i3d.jpg';

export const Text = styled(motion.p)`
  position: relative;
  ${({ theme }) => theme.mixins.column};
  justify-content: center;
  align-items: center;
  text-align: center;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: url(${bg});
  color: transparent;

  .number {
    font-size: 70px;
    font-weight: 700;
  }

  .title {
    font-size: 14px;
    letter-spacing: 3.5px;
    font-weight: 300;
  }

  @media ${({ theme }) => theme.bp.bpTinyS} {
    height: 125px;

    .number {
      font-size: 35px;
    }
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    height: 185px;

    .number {
      font-size: 70px;
    }
  }
`;
