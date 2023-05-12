import styled from 'styled-components';

export const FilterPriceContainer = styled.div`
  position: relative;
  width: 100%;
  height: 35px;

  input[type='range'] {
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
    }

    pointer-events: none;
    position: absolute;
    height: 0;
    width: 100%;
    outline: none;

    &::-webkit-slider-thumb {
      background-color: #f1f5f7;
      border: none;
      border-radius: 50%;
      box-shadow: 0 0 1px 1px #ced4da;
      cursor: pointer;
      height: 18px;
      width: 18px;
      margin-top: 34px;
      pointer-events: all;
      position: relative;
    }
  }
`;

export const RangeInput = styled.input``;

export const InputGroup = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.apart}
`;
