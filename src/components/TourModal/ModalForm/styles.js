import { createStyles } from '@mantine/core';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormWrapper = styled(motion.form)`
  ${({ theme }) => theme.mixins.column};
  gap: 25px;
`;

export const CheckboxTitle = styled.p`
  max-width: 80%;
  text-align: left;
  font-size: 16px;
  line-height: 1.55;
  color: var(--gray2);
`;

export const useCheckboxStyles = createStyles(() => ({
  label: {
    fontSize: '12px',
    color: 'var(--black)',
    letterSpacing: '1.2px',
  },

  checkboxInput: {
    borderRadius: 0,
    borderColor: 'var(--black)',

    '&:checked': {
      background: 'var(--black)',
      borderColor: 'var(--white)',
    },

    '&:checked + svg': {
      color: 'var(--white) !important',
    },
  },
}));
