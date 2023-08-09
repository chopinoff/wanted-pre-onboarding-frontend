import { Dispatch, SetStateAction, useState } from 'react';
import updateTodoById from 'api/todo/updateTodoById';
import { TodosResult } from 'types/todoTypes';

interface Props {
  todoList: TodosResult[] | undefined;
  setTodoList: Dispatch<SetStateAction<TodosResult[] | undefined>>;
}

function TodoSelectDelete({ todoList, setTodoList }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  async function updateTotalTodos(isChecked: boolean) {
    if (todoList) {
      const promises = todoList.map(({ todo, id }) => updateTodoById({ todo, isCompleted: isChecked, id }));
      await Promise.all(promises);
    }
  }

  function handleClickCheckbox() {
    const newTodoList = todoList?.map((todo) => {
      return { ...todo, isCompleted: !isChecked };
    });
    setTodoList(newTodoList);
    setIsChecked(!isChecked);
    updateTotalTodos(!isChecked);
  }

  return (
    <div>
      <input type="checkbox" id="checkbox-total" checked={isChecked} onChange={handleClickCheckbox} />
      <label htmlFor="checkbox-total">전체 체크</label>
      <button>완료 목록 삭제</button>
    </div>
  );
}

export default TodoSelectDelete;
