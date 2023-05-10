import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Description } from '../../../styles';

export const FlexContainer = styled(motion.div)`
  gap: clamp(1.25rem, calc(0.76rem + 2.44vw), 2.5rem);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    ${({ theme }) => theme.mixins.center};
    flex-direction: column;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Separator = styled(motion.span)`
  display: inline-block;
  width: 50%;
  height: 1px;
  background-color: var(--black);
`;

export const LinkBtn = styled(motion.button)`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  line-height: 18px;
  letter-spacing: 1.1px;
  color: var(--purple);
  border: none;
  background: none;
  transition: var(--transition);

  &::after {
    content: '';
    height: 1px;
    width: 0;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    background: var(--purple);
    transition: var(--transition);
  }

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--dark-purple);

    &::after {
      width: 100%;
    }
  }
`;

export const InfoDescription = styled(Description)`
  line-height: clamp(1.5rem, calc(1.3rem + 0.98vw), 2rem);
`;
