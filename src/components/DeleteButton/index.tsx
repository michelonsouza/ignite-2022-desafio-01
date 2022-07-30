import { forwardRef } from 'react';

import { Trash } from 'phosphor-react';

import classes from './styles.module.css';
import { DeleteButtonProps } from './types';

export const DeleteButton = forwardRef<HTMLButtonElement, DeleteButtonProps>(
  (props, ref): JSX.Element => {
    return (
      <button className={classes.root} type="button" {...props} ref={ref}>
        <Trash size={14} />
      </button>
    );
  },
);
