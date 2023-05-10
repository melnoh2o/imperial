import styled from 'styled-components';

import { ContentStack } from '../../styles';

export const FlexContainer = styled(ContentStack)`
  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 85%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 100%;
  }
`;
