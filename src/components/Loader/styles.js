import styled, { css, keyframes } from 'styled-components';

const rotation = keyframes` 
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  display: inline-block;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border: 5px solid ${(props) => props.$color};
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${rotation} 1s linear infinite;

  ${(props) =>
    props.$isAbsoluteCentered &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`;
