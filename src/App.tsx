import { ChangeEvent, FormEvent, useState, useMemo, InvalidEvent } from 'react';

import { v4 as uuid } from 'uuid';

import { Header, TextInput, CreateButton, TaskList } from '@/components';
import { Task as TaskModel } from '@/models';

import classes from './app.module.css';

function App(): JSX.Element {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [newTaskDescription, setNewTaskDescription] = useState<string>('');

  const memoCountDoneTasks = useMemo(() => {
    return tasks.filter(task => task.done).length;
  }, [tasks]);

  const memoCountTasks = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  const memoSubmitButtonIsDisabled = useMemo(() => {
    return !newTaskDescription.trim();
  }, [newTaskDescription]);

  const handleNewTaskIsInvalid = (
    event: InvalidEvent<HTMLInputElement>,
  ): void => {
    event.currentTarget.setCustomValidity('Esse campo é obrigatório!');
  };

  const handleChangeNewTaskDescription = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setNewTaskDescription(event.target.value);
    event.currentTarget.setCustomValidity('');
  };

  const handleCreateNewTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask: TaskModel = {
      id: uuid(),
      description: newTaskDescription,
      done: false,
    };

    setTasks(oldValue => [...oldValue, newTask]);
    setNewTaskDescription('');
  };

  const handleDeletetask = (id: string) => {
    setTasks(oldValue => oldValue.filter(task => task.id !== id));
  };

  const handleToggleTaskIsDone = (id: string) => {
    setTasks(oldValue =>
      oldValue.map(task => ({
        ...task,
        done: task.id === id ? !task.done : task.done,
      })),
    );
  };

  return (
    <>
      <Header />
      <div className={classes.container}>
        <form onSubmit={handleCreateNewTask}>
          <TextInput
            required
            onInvalid={handleNewTaskIsInvalid}
            placeholder="Adicione uma nova tarefa"
            value={newTaskDescription}
            onChange={handleChangeNewTaskDescription}
          />
          <CreateButton disabled={memoSubmitButtonIsDisabled} type="submit" />
        </form>
        <div className={classes.listHeader}>
          <div className={classes.listHeaderInfo}>
            <strong>Tarefas Criadas</strong>
            <strong>{memoCountTasks}</strong>
          </div>
          <div className={classes.listHeaderInfo}>
            <strong>Concluídas</strong>
            <strong>{memoCountDoneTasks}</strong>
          </div>
        </div>
        <div className={classes.taskListContainer}>
          <TaskList
            tasks={tasks}
            onDeleteTask={handleDeletetask}
            onChangeTask={handleToggleTaskIsDone}
          />
        </div>
      </div>
    </>
  );
}

export default App;
