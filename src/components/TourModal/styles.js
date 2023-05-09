import styled from 'styled-components';

export const Title = styled.h5`
  font-size: var(--fs24);
  line-height: clamp(1.25rem, calc(0.96rem + 1.46vw), 2rem);
  font-weight: 600;
  text-align: center;
  color: var(--black);
`;

export const Stack = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(1.13rem, calc(1.05rem + 0.37vw), 1.31rem);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    align-items: center;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(0.81rem, calc(0.76rem + 0.24vw), 0.94rem);
  font-weight: 500;
  letter-spacing: 1.2px;
  color: var(--gray2);
  text-align: center;
`;
