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
