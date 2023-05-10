import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ImgWrapper = styled.div`
  height: 465px;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    height: 260px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImgsGroup = styled(motion.div)`
  ${({ theme }) => theme.mixins.center};
  gap: clamp(0.31rem, calc(0.19rem + 0.61vw), 0.63rem);
  padding: clamp(1.56rem, calc(1.44rem + 0.61vw), 1.88rem) clamp(1.25rem, calc(1.13rem + 0.61vw), 1.56rem);
  border-bottom: 1px solid var(--gray6);
`;

export const ImgButton = styled(motion.button)`
  width: 20%;
  height: 80px;
  border: none;
  opacity: 0.7;
  background: ${(props) => `url(${props.$imgUrl})`} center/cover no-repeat;
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    outline: none;
    opacity: 1;
  }

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 20%;
  }
`;
