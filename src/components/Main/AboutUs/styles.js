import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Title } from '../../styles';

export const FlexContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(1.56rem, calc(1.39rem + 0.85vw), 2rem);

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 80%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 85%;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 100%;
  }
`;

export const AboutUsTitle = styled(Title)`
  font-size: clamp(1.63rem, calc(1.53rem + 0.49vw), 1.88rem);
  line-height: clamp(1.88rem, calc(1.78rem + 0.49vw), 2.13rem);
  color: var(--black);
  text-transform: uppercase;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    text-align: center;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    text-align: left;
  }
`;

export const WelcomeTitleBox = styled(motion.p)`
  ${({ theme }) => theme.mixins.fontSize16};
  font-weight: 400;
  color: var(--black5);
  text-align: center;
  padding: clamp(1.88rem, calc(1.66rem + 1.09vw), 2.5rem) clamp(1.56rem, calc(1.35rem + 1.09vw), 2.19rem);
  background-color: var(--gray4);
  box-shadow: var(--black-bg4) 0px 30px 50px;
`;
