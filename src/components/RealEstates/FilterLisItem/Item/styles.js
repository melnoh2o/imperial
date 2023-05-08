import styled from 'styled-components';

export const ShowMore = styled.button`
  width: 100px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  color: var(--gray3);
  border: none;
  background: none;
  border-bottom: 1px dashed var(--gray3);
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--black);
    border-bottom-color: var(--black);
  }
`;
