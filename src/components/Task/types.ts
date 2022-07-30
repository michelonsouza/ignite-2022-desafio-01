import { HTMLAttributes } from 'react';

import { Task } from '@/models';

export interface TaskProps extends HTMLAttributes<HTMLDivElement> {
  onChangeTask(id: string): void;
  onDeleteTask(id: string): void;
  task: Task;
}
