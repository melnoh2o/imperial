import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FilterWrapper = styled(motion.div)`
  min-height: 738px;
  max-height: 880px;
  min-width: 300px;
  ${({ theme }) => theme.mixins.column};
  gap: 35px;
  padding: 30px;
  overflow: auto;
  background: var(--gray4);
`;

export const FilterStack = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 10px;
  border-bottom: 1px solid var(--black);
`;

export const FilterTitle = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: 1.6px;
  color: var(--black);
`;

export const FilterMobileWrapper = styled.div`
  background: var(--gray4);
  padding: 30px 20px;
  width: 100%;
`;

export const FilterMobileTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: var(--black);
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--black);
`;

export const FilterMobileButton = styled(motion.button)`
  position: relative;
  width: 100%;
  ${({ theme }) => theme.mixins.apart};
  font-size: 12px;
  font-weight: ${(props) => (props.$isActive ? 500 : 400)};
  color: ${(props) => (props.$isActive ? 'var(--black)' : 'var(--black5)')};
  letter-spacing: 1px;
  text-transform: uppercase;
  background: none;
  border: none;
  padding: ${(props) => (props.$isActive ? '10px 0 5px' : '10px 0')};
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    outline: none;
  }
`;

export const FilterMobileStack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 15px;
`;

export const Input = styled.input`
  width: 35%;
  min-height: 24px;
  flex-grow: 1;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.8;
  color: var(--black);
  padding: 0 6px;
  appearance: none;
  border: 1px solid var(--white-gray);
  background: var(--white7);

  &:is(:focus, :active, :hover) {
    outline: none;
  }

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 45%;
  }
`;
