import { useState, ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { TodosResult } from 'types/todoTypes';
import updateTodoById from 'api/todo/updateTodoById';

interface Props extends TodosResult {
  getTodoList: () => Promise<void>;
  setIsModifying: Dispatch<SetStateAction<boolean>>;
}

function TodoUpdate({ id, todo: initialTodo, isCompleted, getTodoList, setIsModifying }: Props) {
  const [todo, setTodo] = useState(initialTodo);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setTodo(value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    todo && (await updateTodoById({ id, todo, isCompleted }));
    setTodo('');
    await getTodoList();
    setIsModifying(false);
  }

  function handleClickCancle() {
    setIsModifying(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-testid="modify-input" value={todo} onChange={handleChange} />
        <button data-testid="submit-button" type="submit">
          제출
        </button>
        <button data-testid="cancel-button" type="button" onClick={handleClickCancle}>
          취소
        </button>
      </form>
    </div>
  );
}

export default TodoUpdate;
