import { forwardRef } from 'react';
import { Textarea as MantineTextarea } from '@mantine/core';

const Textarea = forwardRef(({ inputRef, ...props }) => (
  <MantineTextarea
    {...props}
    ref={inputRef}
    autosize
    styles={{
      label: {
        fontWeight: 400,
        fontSize: 24,
        lineHeight: '28px',
        color: 'var(--white)',
        marginBottom: 13,
        paddingLeft: 14,
      },

      root: {
        width: '100%',
      },

      wrapper: {
        width: '100%',
      },

      input: {
        width: '100%',
        minHeight: 44,
        height: 'auto !important',
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
        fontFamily: 'var(--font-roboto)',
        fontSize: 24,
        fontWeight: 500,
        lineHeight: '26px',
        wordBreak: 'break-word',
        color: 'var(--red)',
        letterSpacing: '1px',
      },
    }}
  />
));

Textarea.displayName = 'Textarea';

export default Textarea;
