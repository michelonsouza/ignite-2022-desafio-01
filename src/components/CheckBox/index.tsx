import { forwardRef } from 'react';

import classes from './styles.module.css';
import { CheckboxProps } from './types';

export const CheckBox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref): JSX.Element => {
    return (
      <input type="checkbox" className={classes.root} {...props} ref={ref} />
    );
  },
);
