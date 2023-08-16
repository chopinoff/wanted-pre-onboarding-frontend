import React, { Dispatch, SetStateAction } from 'react';
import { TodosResult } from 'types/todoTypes';
import deleteTodoById from 'api/todo/deleteTodoById';
import { css } from '@emotion/react';
import { RiCloseCircleFill } from 'react-icons/ri';
import { RxPencil2 } from 'react-icons/rx';

interface Props extends TodosResult {
  getTodoList: () => Promise<void>;
  setIsModifying: Dispatch<SetStateAction<boolean>>;
}

function TodoDefault({ id, todo, isCompleted, getTodoList, setIsModifying }: Props) {
  async function handleClickDelete() {
    await deleteTodoById({ id });
    getTodoList();
  }

  function handleClickModify() {
    setIsModifying(true);
  }

  return (
    <>
      <label htmlFor={`checkbox-${id}`} css={labelContainer(isCompleted)}>
        {todo}
      </label>
      <button data-testid="modify-button" type="button" onClick={handleClickModify}>
        <RxPencil2 size={26} color="var(--text3)" />
      </button>
      <button data-testid="delete-button" type="button" onClick={handleClickDelete}>
        <RiCloseCircleFill size={22} color="var(--text3)" />
      </button>
    </>
  );
}

const labelContainer = (isCompleted?: boolean) => css`
  cursor: pointer;
  font-size: var(--fontMd);
  font-weight: 700;
  color: ${isCompleted && isCompleted ? 'var(--textOp)' : 'var(--text)'};
  text-decoration: ${isCompleted && isCompleted ? 'line-through' : 'none'};
  text-decoration-color: var(--main);
  text-decoration-thickness: 2px;
  transition: all 0.3s;
`;

export default TodoDefault;
