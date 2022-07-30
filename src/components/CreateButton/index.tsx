import { forwardRef } from 'react';

import { PlusCircle } from 'phosphor-react';

import classes from './styles.module.css';
import { CreateButtonProps } from './types';

export const CreateButton = forwardRef<HTMLButtonElement, CreateButtonProps>(
  ({ className, children = 'Criar', ...props }, ref): JSX.Element => {
    return (
      <button
        type="button"
        className={`${classes.root}${className ? ` ${className}` : ''}`}
        {...props}
        ref={ref}
      >
        {children}
        <PlusCircle size={16} weight="bold" />
      </button>
    );
  },
);
