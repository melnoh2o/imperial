import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageWrapper = styled(motion.div)`
  ${({ theme }) => theme.mixins.center};
  gap: 10px;
  padding: 30px 25px;
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
`;
