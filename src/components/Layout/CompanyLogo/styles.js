import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CompanyTitle = styled(NavLink)`
  display: inline-block;
  vertical-align: middle;
  font-size: 20px;
  line-height: 32px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => (props.$isWhite ? 'var(--black)' : 'var(--white)')};
  letter-spacing: 2px;
`;
