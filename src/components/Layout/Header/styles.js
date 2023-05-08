import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const HeaderWrapper = styled(motion.header)`
  background: transparent;
  position: fixed;
  top: 0px;
  right: 0;
  left: 0;
  z-index: 100;
  padding: 24px 0;
  transition: background 0.3s ease-in, top 0.6s linear;

  @media (min-width: 992px) {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  ${(props) =>
    props.$isWhite &&
    css`
      background: var(--white);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    `}
`;
