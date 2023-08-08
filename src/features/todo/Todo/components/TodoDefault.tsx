import { Dispatch, SetStateAction } from 'react';
import { TodosResult } from 'types/todoTypes';
import deleteTodoById from 'api/todo/deleteTodoById';

interface Props extends TodosResult {
  getTodoList: () => Promise<void>;
  setIsModifying: Dispatch<SetStateAction<boolean>>;
}

function TodoDefault({ id, todo, getTodoList, setIsModifying }: Props) {
  async function handleClickDelete() {
    await deleteTodoById({ id });
    getTodoList();
  }

  function handleClickModify() {
    setIsModifying(true);
  }

  return (
    <>
      <label htmlFor="checkbox">{todo}</label>
      <button data-testid="modify-button" type="button" onClick={handleClickModify}>
        수정
      </button>
      <button data-testid="delete-button" type="button" onClick={handleClickDelete}>
        삭제
      </button>
    </>
  );
}
export default TodoDefault;
