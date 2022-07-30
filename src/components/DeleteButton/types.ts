import { ButtonHTMLAttributes } from 'react';

export type DeleteButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
>;
