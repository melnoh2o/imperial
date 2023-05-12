import styled from 'styled-components';

export const FlexContainer = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 18px;
  padding: 10px 0 15px;
`;

export const InputGroup = styled.div`
  ${({ theme }) => theme.mixins.center};
`;

export const TrackWrapper = styled.div`
  position: relative;

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
      margin-top: -1px;
      pointer-events: all;
      position: relative;
    }
  }
`;
