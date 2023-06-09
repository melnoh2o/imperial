import { createStyles } from '@mantine/core';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Description } from '../../styles';

export const Grid = styled(motion.div)`
  display: grid;
  place-items: flex-start;
  gap: clamp(2.5rem, calc(1.77rem + 3.66vw), 4.38rem);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 85%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 70%;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }
`;

export const FlexContainer = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(1.88rem, calc(1.14rem + 3.66vw), 3.75rem);
`;

export const FormDescription = styled(Description)`
  @media ${({ theme }) => theme.bp.bpTinyS} {
    text-align: center;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    text-align: left;
  }
`;

export const ContactGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    flex-direction: column;
    align-items: center;
  }

  @media ${({ theme }) => theme.bp.bpTinyL} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    align-items: flex-start;
  }
`;

export const ContactCardWrapper = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(0.88rem, calc(0.63rem + 1.22vw), 1.5rem);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    align-items: center;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    align-items: flex-start;
  }
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
    '@media (min-width: 320px)': {
      minWidth: '100%',
    },

    '@media (min-width: 64em)': {
      minWidth: '45%',
    },
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

  @media ${({ theme }) => theme.bp.bpTinyS} {
    flex-direction: column;
    gap: 20px;

    .react-tel-input {
      width: 100% !important;
    }
  }

  @media ${({ theme }) => theme.bp.bpMedium} {
    flex-direction: row;

    .react-tel-input {
      width: 45% !important;
    }

    .react-tel-input .country-list {
      width: 230px;
    }
  }
`;
