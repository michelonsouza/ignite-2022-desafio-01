import { forwardRef } from 'react';

import { Check } from 'phosphor-react';

import classes from './styles.module.css';
import { CheckboxProps } from './types';

export const CheckBox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, ...props }, ref): JSX.Element => {
    return (
      <label className={classes.root} htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          className={classes.input}
          {...props}
          ref={ref}
        />
        <Check size={14} className={classes.check} weight="bold" />
      </label>
    );
  },
);
