import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

const loading = keyframes`
  0% {
    transform: translate(0) scaleX(0);
  }
  30% {

    transform: translate(0) scaleX(1);
  }
  100%, 80% {

    transform: translate(100%) scaleX(0);
  }
`;

export const LoaderTitle = styled.p`
  display: inline-block;
  position: relative;
  top: 50%;
  overflow: hidden;
  vertical-align: middle;
  height: 2em;
  line-height: 2em;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: white;
  transition: transform 0s linear;
  transform: scaleX(1) translateY(-50%);
  transform-origin: center right;
  z-index: 2;

  &::after {
    content: '';
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: #111111;
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: center left;
    animation: ${loading} 2s linear infinite forwards;
  }

  @media (min-width: 320px) {
    font-size: 2em;
  }

  @media (min-width: 480px) {
    font-size: 2.5em;
  }

  @media (min-width: 576px) {
    font-size: 3em;
  }

  @media (min-width: 48em) {
    font-size: 4em;
  }

  @media (min-width: 64em) {
    font-size: 5em;
  }
`;
