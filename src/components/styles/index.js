import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { createStyles } from '@mantine/core';

export const Container = styled.div`
  width: min(90%, 1140px);
  margin-inline: auto;
`;

export const Wrapper = styled.section`
  padding: 107px 0;
`;

export const ContentStack = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(2.81rem, calc(2.69rem + 0.61vw), 3.13rem);
`;

export const Subtitle = styled(motion.p)`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 4.5px;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--black);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    text-align: center;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    text-align: left;
  }
`;

export const Title = styled(motion.h4)`
  font-size: 30px;
  line-height: 34px;
  font-weight: 700;
  color: var(--black);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    text-align: center;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    text-align: left;
  }
`;

export const TitleStack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 18px;
`;

export const Description = styled(motion.p)`
  ${({ theme }) => theme.mixins.fontSize16};
  font-weight: 400;
  word-wrap: break-word;
  color: var(--gray2);

  .group {
    ${({ theme }) => theme.mixins.center};
    gap: 4px;
  }
`;

export const SuccessMessage = styled(motion.p)`
  text-align: center;
  font-size: 16px;
  letter-spacing: 0.5px;
  background: var(--green);
  color: var(--white);
  padding: 20px;
`;

export const FormButton = styled.button`
  position: relative;
  height: 50px;
  ${({ theme }) => theme.mixins.fCenter};
  font-size: var(--fs16);
  line-height: 18px;
  letter-spacing: 2px;
  font-weight: 500;
  color: var(--black);
  border: 1px solid var(--black);
  background: var(--white);
  transition: all 0.3s ease-in;

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    background: var(--black);
    top: 50%;
    height: 1px;
    width: 40px;
    transition: all 0.3s ease-out 1.2s;
  }

  &::before {
    left: -11px;
  }

  &::after {
    right: -11px;
  }

  &:is(:hover, :active, :focus) {
    outline: none;
    border-color: var(--white);
    background: var(--black);
    color: var(--white);

    &::after,
    &::before {
      background: var(--white);
    }
  }

  &:disabled:hover {
    color: var(--black);
    border-color: var(--black);
    background: var(--white);
  }
`;

export const useInputStyles = createStyles(() => ({
  input: {
    height: '57px',
    fontSize: 14,
    lineHeight: 26,
    fontWeight: 400,
    border: 'none',
    borderRadius: 0,
    color: 'var(--black)',
    borderBottom: '3px solid transparent',
    padding: '10px 20px',
    backgroundColor: 'var(--gray4)',
    transition: 'all 0.3s ease-in',

    '&:focus, &:hover, &:active': {
      backgroundColor: 'var(--gray4)',
      borderBottomColor: 'var(--black)',
      color: 'var(--black)',
    },
  },
}));

export const ContentWrapper = styled(motion.section)`
  padding: clamp(3.13rem, calc(2.64rem + 2.44vw), 4.38rem) 0;

  ${(props) =>
    props.$isFirst &&
    css`
      padding: clamp(4.38rem, calc(2.67rem + 8.54vw), 8.75rem) 0
        clamp(3.13rem, calc(2.64rem + 2.44vw), 4.38rem);
    `}

  ${(props) =>
    props.$isLast &&
    css`
      padding: clamp(3.13rem, calc(2.64rem + 2.44vw), 4.38rem) 0
        clamp(4.38rem, calc(2.67rem + 8.54vw), 8.75rem);
    `}
  
    ${(props) =>
    props.$isBoth &&
    css`
      padding: clamp(4.38rem, calc(2.67rem + 8.54vw), 8.75rem) 0;
    `}
`;
