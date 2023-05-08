import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const bgPreview = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683310095/IMPERIAL_zbxaoq.jpg';

export const Wrapper = styled(motion.section)`
  ${({ theme }) => theme.mixins.column};
  align-items: flex-start;
  gap: 50px;
  padding: 70px 0;
`;

export const VideoWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 420px;
  ${({ theme }) => theme.mixins.apart};
`;

export const VideoBox = styled(motion.div)`
  position: absolute;
  width: 58%;
  height: 100%;
  background-image: url(${bgPreview});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const pulse = keyframes`
0% {
}
70% {
    box-shadow: 0 0 0 50px var(--black-bg3);
}
100% {

    box-shadow: 0 0 0 0 var(--black-bg3);
}
`;

export const PlayButton = styled(motion.button)`
  position: absolute;
  top: 40%;
  right: -40px;
  width: 80px;
  height: 80px;
  ${({ theme }) => theme.mixins.fCenter};
  font-size: 26px;
  color: var(--white);
  border: 1px solid var(--black);
  border-radius: 50%;
  background-color: var(--black);
  animation: ${pulse} 2s infinite;
  transition: all 0.3s ease-in;

  svg {
    ${({ theme }) => theme.mixins.fCenter};
  }

  &:is(:hover, :active, :focus) {
    color: var(--black);
    background-color: var(--white);
  }
`;
