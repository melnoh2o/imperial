import styled from 'styled-components';

import { ContentWrapper } from '../styles/index';

export const FlexContainer = styled(ContentWrapper)`
  width: 95%;
  margin-inline: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: clamp(2.81rem, calc(2.69rem + 0.61vw), 3.13rem);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    flex-direction: column;
    width: 85%;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 70%;
  }
`;
