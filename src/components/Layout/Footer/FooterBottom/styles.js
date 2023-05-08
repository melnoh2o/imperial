import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.section)`
  position: relative;
  padding-top: 47px;
`;

export const CopyrightTitle = styled(motion.p)`
  font-size: 10px;
  line-height: 18px;
  letter-spacing: 2px;
  font-weight: 700;
  color: var(--white);
`;

export const SocialLinksGroup = styled.ul`
  ${({ theme }) => theme.mixins.center};
  gap: 11px;
`;

export const SocialLink = styled(motion.a)`
  width: 30px;
  height: 30px;
  position: relative;
  ${({ theme }) => theme.mixins.fCenter};
  font-size: 12px;
  line-height: 28px;
  border: 1px solid var(--white4);
  color: var(--white);
  transition: border 0.3s ease-in, background-color 0.3s ease-in, color 0.3s ease-in;

  &:is(:hover, :active, :focus) {
    border: 1px solid var(--white);
    background-color: var(--white);
    color: var(--black4);
  }
`;
