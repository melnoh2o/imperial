import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Title } from '../../styles';

export const AboutUsTitle = styled(Title)`
  color: var(--black);
  text-transform: uppercase;
`;

export const FlexContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 32px;
`;

export const WelcomeTitleBox = styled(motion.p)`
  ${({ theme }) => theme.mixins.fontSize16};
  font-weight: 400;
  color: var(--black5);
  text-align: center;
  padding: 25px 30px;
  background-color: var(--gray4);
  box-shadow: var(--black-bg4) 0px 30px 50px;
`;
