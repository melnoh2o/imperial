import styled from 'styled-components';

import { ContentWrapper } from '../../styles';

export const Wrapper = styled(ContentWrapper)`
  background-color: var(--white6);
`;

export const LoaderWrapper = styled.div`
  position: relative;
  min-height: ${(props) => (props.$isDataExist ? '50vh' : '30vh')};
`;

export const Grid = styled.div`
  display: grid;
  gap: var(--gap30);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 85%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }

  @media ${({ theme }) => theme.bp.bpMedium} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
