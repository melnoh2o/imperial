import { createGlobalStyle } from 'styled-components';
import variables from './variables';

export const GlobalStyles = createGlobalStyle`
  ${variables};

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
  button {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  

  input[type='number'] {
    -moz-appearance:textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
   -webkit-appearance: none;
  }
`;
