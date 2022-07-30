import { NoContent, Task } from '@/components';

import { TaskListProps } from './types';

export function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: TaskListProps): JSX.Element {
  if (!tasks.length) {
    return <NoContent />;
  }

  return (
    <>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onChangeTask={onChangeTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </>
  );
}
