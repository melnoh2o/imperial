import styled from 'styled-components';

export const ButtonGroup = styled.div`
  ${({ theme }) => theme.mixins.center};
  flex-wrap: wrap;
  gap: 6px;
`;
