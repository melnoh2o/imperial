import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Group = styled(motion.div)`
  position: relative;

  svg {
    position: absolute;
    top: -14.5px;
    left: 0;
    width: 46px;
    height: 46px;
  }
`;

export const CompanyTitle = styled(NavLink)`
  display: inline-block;
  vertical-align: middle;
  font-size: 20px;
  line-height: 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => (props.$isWhite ? 'var(--black)' : 'var(--white)')};
  letter-spacing: 2px;
  padding-left: 44px;
`;
