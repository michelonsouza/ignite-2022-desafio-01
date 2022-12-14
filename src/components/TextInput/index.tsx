import { forwardRef } from 'react';

import classes from './styles.module.css';
import { TextInputProps } from './types';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, ...props }, ref): JSX.Element => {
    return (
      <input
        className={`${classes.root}${className ? ` ${className}` : ''}`}
        {...props}
        ref={ref}
      />
    );
  },
);
