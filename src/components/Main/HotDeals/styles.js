import styled from 'styled-components';

import { ContentStack } from '../../styles';

export const FlexContainer = styled(ContentStack)`
  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 80%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 85%;
    margin-inline: auto;
  }
`;
