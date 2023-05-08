import styled, { css, keyframes } from 'styled-components';

const animloader = keyframes`
  0% {
    box-shadow: -72px 0 #000000 inset;
  }
  100% {
    box-shadow: 48px 0 #000000 inset;
  }
`;

export const Wrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${animloader} 1s linear infinite;

  ${(props) =>
    props.$isAbsoluteCentered &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`;
