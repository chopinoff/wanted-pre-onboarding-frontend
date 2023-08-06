import { ChangeEvent, useState } from 'react';
import putTodosById from '../../api/todos/putTodosById';
import { TodosResult } from '../../types/todoTypes';
import deleteTodosById from '../../api/todos/deleteTodosById';

function TodoItem({ id, todo, isCompleted }: TodosResult) {
  const [isChecked, setIsChecked] = useState(isCompleted);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    setIsChecked(checked);
    putTodosById({ todo, isCompleted: checked, id });
  }

  function handleClickDelete() {
    deleteTodosById({ id });
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <span>{todo}</span>
        <button data-testid="modify-button">수정</button>
        <button data-testid="delete-button" onClick={handleClickDelete}>
          삭제
        </button>
      </label>
    </li>
  );
}
export default TodoItem;
