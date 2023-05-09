import styled from 'styled-components';

export const Wrapper = styled.button`
  position: relative;
  ${({ theme }) => theme.mixins.center};
  gap: 6px;
  color: var(--gray2);
  border: none;
  background: transparent;
  transition: all 300ms linear;

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--black);
  }
`;

export const Checkbox = styled.span`
  position: relative;
  height: 20px;
  width: 20px;
  display: inline-block;
  vertical-align: middle;
  border: 2px solid var(--black);

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 1px;
    left: 6px;
    width: 6px;
    height: 13px;
    border: solid var(--black);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    transition: all 200ms linear;
    opacity: ${(props) => (props.$isClicked ? '1' : '0')};
  }

  @media ${({ theme }) => theme.bp.bpTinyS} {
    height: 17px;
    width: 17px;

    &::before {
      top: 0;
      left: 5px;
      width: 5px;
      height: 10px;
    }
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
`;
