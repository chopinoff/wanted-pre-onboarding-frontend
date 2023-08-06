import { ChangeEvent, useState } from 'react';
import putTodosById from '../../api/todos/putTodosById';
import { TodosResult } from '../../types/todoTypes';

function TodoItem({ id, todo, isCompleted }: TodosResult) {
  const [isChecked, setIsChecked] = useState(isCompleted);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    setIsChecked(checked);
    putTodosById({ todo, isCompleted: checked, id });
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <span>{todo}</span>
      </label>
    </li>
  );
}
export default TodoItem;
