import { ChangeEvent, useState } from 'react';
import putTodosById from '../../api/todos/putTodosById';
import { TodosResult } from '../../types/todoTypes';
import TodoItemView from './TodoItemView';
import ModifyTodoForm from './ModifyTodoForm';

function TodoItem({ id, todo, isCompleted }: TodosResult) {
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
        <ModifyTodoForm id={id} todo={todo} isCompleted={isCompleted} handleIsModifying={setIsModifying} />
      ) : (
        <label htmlFor="completed-check-box">
          <TodoItemView todo={todo} isCompleted={isCompleted} id={id} handleIsModifying={setIsModifying} />
        </label>
      )}
    </li>
  );
}
export default TodoItem;
