import { forwardRef } from 'react';
import { NumberInput as MantineNumberInput } from '@mantine/core';

const NumberInput = forwardRef(({ inputRef, ...props }) => (
  <MantineNumberInput
    {...props}
    ref={inputRef}
    styles={{
      root: {
        width: '100%',
      },

      wrapper: {
        width: '100%',
      },

      input: {
        width: '100%',
        minHeight: 44,
        height: 44,
        background: 'var(--white)',
        border: 'none',
        borderRadius: 5,
        padding: '6px 12px',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '18px',
        color: 'var(--black)',

        '&::focus': {
          outline: 'none',
        },
      },

      error: {
        fontWeight: 500,
        wordBreak: 'break-word',
        letterSpacing: '1px',
      },
    }}
  />
));

NumberInput.displayName = 'NumberInput';

export default NumberInput;
