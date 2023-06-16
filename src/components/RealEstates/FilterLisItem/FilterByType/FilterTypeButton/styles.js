import styled, { css } from 'styled-components';

export const ButtonGroup = styled.div`
  height: 28px;
  display: flex;
  align-items: stretch;
  flex-wrap: nowrap;
  gap: 4px;
  color: var(--white);
  padding: 0 12px;
  border: 1px solid var(--black);
  border-radius: 4px;
  background-color: var(--black);
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    color: var(--black);
    background-color: transparent;
  }
`;

export const Button = styled.button`
  ${({ theme }) => theme.mixins.center};
  gap: 5px;
  font-size: var(--fs14);
  font-weight: 700;
  line-height: 120%;
  color: inherit;
  text-transform: uppercase;
  border: 1px solid transparent;
  background-color: transparent;

  button {
    &:disabled {
      &:is(:hover, :active, :focus) {
        color: var(--white);
        background-color: var(--black);
      }
    }
  }
`;
