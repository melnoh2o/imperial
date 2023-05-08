import styled from 'styled-components';

export const FilterPriceContainer = styled.div`
  position: relative;
  width: 100%;
  height: 35px;

  input[type='range'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    outline: none;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    background-color: transparent;
    pointer-events: none;
  }
`;

export const RangeInput = styled.input``;

export const InputGroup = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.apart}
`;

export const Input = styled.input`
  flex-grow: 1;
  width: 35%;
  border: 1px #ddd solid;
  background: #f8f8f8;
  color: #000;
  box-sizing: border-box;
  padding: 0 6px;
  appearance: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.8;
  min-height: 24px;
  outline: 0;
`;
