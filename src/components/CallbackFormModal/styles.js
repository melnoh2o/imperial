import styled from 'styled-components';
import { motion } from 'framer-motion';
import { createStyles } from '@mantine/core';

export const FormWrapper = styled(motion.form)`
  ${({ theme }) => theme.mixins.column};
  gap: 25px;
`;

export const useStyles = createStyles(() => ({
  label: {
    fontSize: 16,
    fontWeight: 400,
    color: 'var(--black)',
    paddingLeft: 12,
    marginBottom: 6,
  },
}));

export const Label = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--black);
  padding-left: 12px;
  margin-bottom: 6px;
`;
