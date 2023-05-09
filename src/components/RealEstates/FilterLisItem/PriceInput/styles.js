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
