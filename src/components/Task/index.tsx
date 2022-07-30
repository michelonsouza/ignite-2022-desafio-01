import { forwardRef, useMemo } from 'react';

import { CheckBox, DeleteButton } from '@/components';

import classes from './styles.module.css';
import { TaskProps } from './types';

export const Task = forwardRef<HTMLDivElement, TaskProps>(
  (
    { className, task, onChangeTask, onDeleteTask, ...props },
    ref,
  ): JSX.Element => {
    const taskCompletedClass = useMemo(() => {
      return task.completed ? classes.taskCompleted : '';
    }, [task.completed]);

    const handleToggleCompleteTask = () => {
      onChangeTask(task.id);
    };

    const handleDeleteTask = () => {
      onDeleteTask(task.id);
    };

    return (
      <div
        className={`${classes.root}${className ? ` ${className}` : ''}`}
        ref={ref}
        {...props}
      >
        <CheckBox
          onChange={handleToggleCompleteTask}
          checked={task.completed}
        />
        <p className={taskCompletedClass}>{task.description}</p>
        <DeleteButton onClick={handleDeleteTask} />
      </div>
    );
  },
);
