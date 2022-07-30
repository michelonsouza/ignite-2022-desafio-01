import { Task as TaskModel } from '@/models';

export interface TaskListProps {
  tasks: TaskModel[];
  onChangeTask(taskId: string): void;
  onDeleteTask(taskId: string): void;
}
