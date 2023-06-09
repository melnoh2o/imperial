import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

import { ContentWrapper } from '../../styles';

const bgPreview = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683310095/IMPERIAL_zbxaoq.jpg';

export const Wrapper = styled(ContentWrapper)`
  ${({ theme }) => theme.mixins.column};
  align-items: flex-start;
  gap: var(--gap50);

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 85%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 70%;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 100%;
  }
`;

export const VideoWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 420px;
  ${({ theme }) => theme.mixins.apart};

  @media ${({ theme }) => theme.bp.bpTinyS} {
    flex-direction: column;
    gap: var(--gap30);
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    flex-direction: row;
  }
`;

export const VideoBox = styled(motion.div)`
  position: relative;
  background-image: url(${bgPreview});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
    height: 370px;
    ${({ theme }) => theme.mixins.fCenter};
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 58%;
    height: 420px;
  }
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
  width: 80px;
  height: 80px;
  ${({ theme }) => theme.mixins.fCenter};
  font-size: 26px;
  border: 1px solid var(--black);
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
  transition: all 0.3s ease-in;

  svg {
    ${({ theme }) => theme.mixins.fCenter};
  }

  &:is(:hover, :active, :focus) {
    color: var(--black);
    background: var(--white);
  }

  @media ${({ theme }) => theme.bp.bpTinyS} {
    color: var(--black);
    border-color: transparent;
    background: transparent;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    position: absolute;
    top: 40%;
    right: -40px;
    color: var(--white);
    border-color: var(--black);
    background: var(--black);
  }
`;
