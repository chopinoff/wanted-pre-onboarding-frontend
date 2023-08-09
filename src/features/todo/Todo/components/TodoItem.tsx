import { ChangeEvent, useState } from 'react';
import updateTodoById from 'api/todo/updateTodoById';
import { TodosResult } from 'types/todoTypes';
import TodoDefault from './TodoDefault';
import TodoUpdate from './TodoUpdate';

interface Props extends TodosResult {
  getTodoList: () => Promise<void>;
}

function TodoItem({ id, todo, isCompleted, getTodoList }: Props) {
  const [isModifying, setIsModifying] = useState(false);

  async function handleClickCheckbox(event: ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    await updateTodoById({ todo, isCompleted: checked, id });
    getTodoList();
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
