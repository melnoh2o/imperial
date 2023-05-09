import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';

export const WrapperIcon = styled(IoIosArrowDown)`
  position: absolute;
  right: 1.5px;
  width: 18px;
  height: 18px;
  transform: ${(props) => (props.$isVisible ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: var(--transition);
`;
