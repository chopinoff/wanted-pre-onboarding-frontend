import { ChangeEvent, useState } from 'react';
import updateTodoById from 'api/todo/updateTodoById';
import { TodosResult } from 'types/todoTypes';
import TodoDefault from './TodoDefault';
import TodoUpdate from './TodoUpdate';

interface Props extends TodosResult {
  getTodoList: () => Promise<void>;
}

function TodoItem({ id, todo, isCompleted: initialIsCompleted, getTodoList }: Props) {
  const [isCompleted, setIsCompleted] = useState(initialIsCompleted);
  const [isModifying, setIsModifying] = useState(false);

  function handleClickCheckbox(event: ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    setIsCompleted(checked);
    updateTodoById({ todo, isCompleted: checked, id });
  }

  return (
    <li>
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        aria-label="checkbox"
        checked={isCompleted}
        onChange={handleClickCheckbox}
      />
      {isModifying ? (
        <TodoUpdate {...{ id, todo, isCompleted, getTodoList, setIsModifying }} />
      ) : (
        <TodoDefault {...{ id, todo, getTodoList, setIsModifying }} />
      )}
    </li>
  );
}
export default TodoItem;
