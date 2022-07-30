import { ClipboardText } from 'phosphor-react';

import classes from './styles.module.css';

export function NoContent(): JSX.Element {
  return (
    <div className={classes.root}>
      <ClipboardText className={classes.icon} size={64} weight="light" />
      <div className={classes.content}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
