import { useState } from 'react';
import updateTodoById from 'api/todo/updateTodoById';
import { TodosResult } from 'types/todoTypes';

interface Props {
  todoList: TodosResult[] | undefined;
  getTodoList: () => Promise<void>;
}

function TodoSelectDelete({ todoList, getTodoList }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  async function updateTotalTodos(isChecked: boolean) {
    if (todoList) {
      const promises = todoList.map(({ todo, id }) => updateTodoById({ todo, isCompleted: isChecked, id }));
      await Promise.all(promises);
    }
  }

  async function handleClickCheckbox() {
    setIsChecked(!isChecked);
    await updateTotalTodos(!isChecked);
    getTodoList();
  }

  return (
    <div>
      <input type="checkbox" id="checkbox-total" onChange={handleClickCheckbox} />
      <label htmlFor="checkbox-total">전체 체크</label>
      <button>완료 목록 삭제</button>
    </div>
  );
}

export default TodoSelectDelete;
