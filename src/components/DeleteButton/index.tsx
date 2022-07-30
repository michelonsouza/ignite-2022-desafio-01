import { forwardRef } from 'react';

import { Trash } from 'phosphor-react';

import classes from './styles.module.css';
import { DeleteButtonProps } from './types';

export const DeleteButton = forwardRef<HTMLButtonElement, DeleteButtonProps>(
  ({ className, ...props }, ref): JSX.Element => {
    return (
      <button
        className={`${classes.root}${className ? ` ${className}` : ''}`}
        type="button"
        {...props}
        ref={ref}
      >
        <Trash size={14} />
      </button>
    );
  },
);
