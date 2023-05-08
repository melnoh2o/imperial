import { createStyles } from '@mantine/core';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 70px 0;
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: flex-start;
  gap: 70px;
`;

export const FlexContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 60px;
`;

export const ContactCardWrapper = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 24px;
`;

export const Separator = styled.span`
  width: 70px;
  height: 1px;
  background-color: var(--black);
`;

export const ContactCardTitle = styled.p`
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 2.2px;
  font-weight: 500;
  color: var(--black);
`;

export const ContactCardLink = styled.a`
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  color: var(--gray2);
  opacity: 1;
  transition: opacity 0.3s ease-in;

  &:is(:hover, :active, :focus) {
    opacity: 0.7;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
`;

export const FormStack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 20px;
`;

export const useInputStyles = createStyles(() => ({
  root: {
    minWidth: '45%',
  },

  input: {
    width: '100%',
    minHeight: 57,
    maxHeight: 123,
    fontSize: 12,
    lineHeight: '26px',
    fontWeight: 300,
    border: 'none',
    borderRadius: 0,
    borderBottom: '3px solid transparent',
    padding: '16px 25px',
    backgroundColor: 'var(--gray4)',
    color: 'var(--gray5)',
    transition: 'border-bottom 0.3s ease-in, color 0.3s ease-in',

    '&:focus': {
      borderBottomColor: 'var(--black)',
      color: 'var(--black)',
    },

    '&:hover': {
      borderBottomColor: 'var(--black)',
      color: 'var(--black)',
    },
  },
}));

export const FormButton = styled.button`
  position: relative;
  ${({ theme }) => theme.mixins.center};
  gap: 5px;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 1.5px;
  font-weight: 700;
  color: var(--black);
  background-color: transparent;
  border: none;
  border-radius: 0;
  padding: 7px 10px;
  margin-left: auto;
`;

export const Group = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
