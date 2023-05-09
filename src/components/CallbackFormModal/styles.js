import styled from 'styled-components';
import { motion } from 'framer-motion';
import { createStyles } from '@mantine/core';

export const FormWrapper = styled(motion.form)`
  ${({ theme }) => theme.mixins.column};
  gap: 25px;

  .form-control {
    &:is(:hover, :focus, :active) {
      background-color: var(--gray4) !important;
      border-bottom-color: var(--black) !important;
      color: var(--black !important);
    }
  }
`;

export const useStyles = createStyles(() => ({
  label: {
    fontSize: 'var(--fs16)',
    fontWeight: 400,
    color: 'var(--black)',
    paddingLeft: 12,
    marginBottom: 6,
  },
}));

export const Label = styled.p`
  font-size: var(--fs16);
  font-weight: 400;
  color: var(--black);
  padding-left: 12px;
  margin-bottom: 6px;
`;
