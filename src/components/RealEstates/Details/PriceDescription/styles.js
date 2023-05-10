import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 30%;
  padding: clamp(1.56rem, calc(1.44rem + 0.61vw), 1.88rem) clamp(0.94rem, calc(0.82rem + 0.61vw), 1.25rem);
  background: var(--white);

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 430px;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 30%;
  }
`;

export const PricesStack = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(0.94rem, calc(0.89rem + 0.24vw), 1.06rem);
`;

export const PriceTitle = styled(motion.p)`
  font-size: var(--fs16);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--black);
`;

export const Stack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(1.13rem, calc(1.08rem + 0.24vw), 1.25rem);
`;

export const PriceGroup = styled(motion.div)`
  ${({ theme }) => theme.mixins.center};
  gap: 8px;
  font-size: var(--fs16);
  border-bottom: 1px solid var(--white-gray2);
`;

export const CallbackButton = styled(motion.button)`
  height: clamp(2.19rem, calc(2.07rem + 0.61vw), 2.5rem);
  font-size: var(--fs14);
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
