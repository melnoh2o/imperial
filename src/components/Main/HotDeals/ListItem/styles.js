import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 80%;
    margin-inline: auto;
  }
`;

export const CardWrapper = styled(motion.div)`
  overflow: hidden;
`;

export const ImageWrapper = styled(motion.div)`
  width: 100%;
`;

export const Img = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentBox = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 30px;
  padding: 25px 30px;
  background: var(--gray4);
`;

export const CardTitle = styled(motion.h6)`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--black);
`;

export const CardDescription = styled(motion.p)`
  font-size: 14px;
  color: var(--black-bg);
`;

export const PriceDescriptionList = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 4px;

  p {
    font-size: 14px;
    color: var(--black-bg);
  }

  .strong {
    color: var(--black);
  }
`;

export const CardButton = styled(motion.button)`
  position: relative;
  width: auto;
  font-size: 14px;
  font-weight: 400;
  color: var(--white);
  border: 1px solid var(--white);
  background: var(--black);
  padding: 10px 15px;
  transition: var(--transition);

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    background: var(--white);
    top: 50%;
    height: 1px;
    width: 40px;
    transition: var(--transition);
  }

  &::before {
    left: -11px;
  }

  &::after {
    right: -11px;
  }

  &:is(:hover, :active, :focus) {
    color: var(--black);
    border: 1px solid var(--black);
    background: var(--white);

    &::before,
    &::after {
      background: var(--black);
    }
  }
`;
