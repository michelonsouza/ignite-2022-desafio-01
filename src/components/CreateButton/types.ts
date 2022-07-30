import { ButtonHTMLAttributes, ReactNode } from 'react';

export type CreateButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  children?: ReactNode;
};
