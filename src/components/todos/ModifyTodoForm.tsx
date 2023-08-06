import { useState, ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { TodosResult } from '../../types/todoTypes';
import putTodosById from '../../api/todos/putTodosById';

interface Props extends TodosResult {
  handleIsModifying: Dispatch<SetStateAction<boolean>>;
}

function ModifyTodoForm({ id, todo: initialTodo, isCompleted, handleIsModifying }: Props) {
  const [todo, setTodo] = useState(initialTodo);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setTodo(value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    todo && putTodosById({ id, todo, isCompleted });
    setTodo('');
    handleIsModifying(false);
  }

  function handleClickCancle() {
    handleIsModifying(false);
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

export default ModifyTodoForm;
