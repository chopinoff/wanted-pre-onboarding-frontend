import { ChangeEvent, useState } from 'react';
import putTodosById from '../../api/todos/putTodosById';
import { TodosResult } from '../../types/todoTypes';
import TodoItemView from './TodoItemView';
import ModifyTodoForm from './ModifyTodoForm';

interface Props extends TodosResult {
  handleTodoList: () => Promise<void>;
}

function TodoItem({ id, todo, isCompleted, handleTodoList }: Props) {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [isModifying, setIsModifying] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    setIsChecked(checked);
    putTodosById({ todo, isCompleted: checked, id });
  }

  return (
    <li>
      <input type="checkbox" id="completed-check-box" checked={isChecked} onChange={handleChange} />
      {isModifying ? (
        <ModifyTodoForm {...{ id, todo, isCompleted, handleTodoList, handleIsModifying: setIsModifying }} />
      ) : (
        <label htmlFor="completed-check-box">
          <TodoItemView {...{ id, todo, isCompleted, handleTodoList, handleIsModifying: setIsModifying }} />
        </label>
      )}
    </li>
  );
}
export default TodoItem;
