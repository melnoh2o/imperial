import styled from 'styled-components';

import { ContentWrapper } from '../styles/index';

export const FlexContainer = styled(ContentWrapper)`
  margin-inline: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: clamp(2.81rem, calc(2.69rem + 0.61vw), 3.13rem);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 85%;
    flex-direction: column;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 70%;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 90%;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 75%;
  }

  @media ${({ theme }) => theme.bp.bpMedium} {
    width: 95%;
    flex-direction: row;
  }
`;
