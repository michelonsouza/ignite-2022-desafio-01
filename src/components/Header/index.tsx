import logoImage from '@/assets/images/logo.svg';

import classes from './styles.module.css';

export function Header(): JSX.Element {
  return (
    <header className={classes.root}>
      <img src={logoImage} alt="Todo Logo" />
    </header>
  );
}
