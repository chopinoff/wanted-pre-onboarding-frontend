import React, { useState, ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { TodosResult } from 'types/todoTypes';
import updateTodoById from 'api/todo/updateTodoById';
import { css } from '@emotion/react';
import Input from 'features/common/Input';
import useResponsive from 'hooks/useResponsive';
import { RxReset, RxCheck } from 'react-icons/rx';
import Button from 'features/common/Button';

interface Props extends TodosResult {
  getTodoList: () => Promise<void>;
  setIsModifying: Dispatch<SetStateAction<boolean>>;
}

function TodoUpdate({ id, todo: initialTodo, isCompleted, getTodoList, setIsModifying }: Props) {
  const { isMobile } = useResponsive();
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
    <>
      <form onSubmit={handleSubmit} css={formContainer(isMobile)}>
        <Input
          width={isMobile ? 'calc(100% - 10px)' : 'calc(100% - 20px)'}
          height={isMobile ? '40px' : '50px'}
          data-testid="modify-input"
          aria-label="modify-input"
          value={todo}
          onChange={handleChange}
          css={inputContainer}
          bgColor={'var(--bg2)'}
        />
        <Button
          text={isMobile ? undefined : '등록'}
          color="var(--main)"
          height={isMobile ? '40px' : '50px'}
          width={isMobile ? '40px' : '60px'}
          padding="0"
          bdColor="var(--main)"
          data-testid="submit-button"
          type="submit"
          center
          Icon={isMobile ? RxCheck : undefined}
        />
        <button data-testid="cancel-button" type="button" onClick={handleClickCancle}>
          <RxReset size={20} color="var(--text3)" />
        </button>
      </form>
    </>
  );
}

const formContainer = (isMobile?: boolean) => css`
  display: grid;
  grid-template-columns: ${isMobile ? '1fr 40px 40px' : '1fr 60px 60px'};
`;

const inputContainer = css`
  font-size: var(--fontMd);
  font-weight: bold;
`;

export default TodoUpdate;
