import { Dispatch, SetStateAction } from 'react';
import { TodosResult } from '../../types/todoTypes';
import deleteTodosById from '../../api/todos/deleteTodosById';

interface Props extends TodosResult {
  handleIsModifying: Dispatch<SetStateAction<boolean>>;
}

function TodoItemView({ id, todo, handleIsModifying }: Props) {
  function handleClickDelete() {
    deleteTodosById({ id });
  }

  function handleClickModify() {
    handleIsModifying(true);
  }

  return (
    <>
      <span>{todo}</span>
      <button data-testid="modify-button" type="button" onClick={handleClickModify}>
        수정
      </button>
      <button data-testid="delete-button" type="button" onClick={handleClickDelete}>
        삭제
      </button>
    </>
  );
}
export default TodoItemView;
