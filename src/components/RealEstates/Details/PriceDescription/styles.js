import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 30%;
  padding: 30px 20px 10px;
  background: var(--white);
`;

export const PricesStack = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 17px;
`;

export const PriceTitle = styled(motion.p)`
  font-size: 1em;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--black);
`;

export const Stack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 20px;
`;

export const PriceText = styled(motion.p)`
  ${({ theme }) => theme.mixins.center};
  gap: 8px;
  border-bottom: 1px solid #aaa;
`;

export const CallbackButton = styled(motion.button)`
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  color: var(--white);
  line-height: 1.8;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  border: 1px solid var(--black);
  background: var(--black);
  padding: 6px 12px;
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    color: var(--black);
    background: var(--white);
    outline: none;
  }
`;
