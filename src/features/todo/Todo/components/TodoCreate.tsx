import React, { useState, ChangeEvent, FormEvent } from 'react';
import { css } from '@emotion/react';
import { RiAddFill } from 'react-icons/ri';
import createTodo from 'api/todo/createTodo';
import useResponsive, { IsResponsive } from 'hooks/useResponsive';
import Input from 'features/common/Input';
import Button from 'features/common/Button';

interface Props {
  getTodoList: () => Promise<void>;
}

function TodoCreate({ getTodoList }: Props) {
  const { isMobile } = useResponsive();
  const [todo, setTodo] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setTodo(value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    todo && (await createTodo({ todo }));
    getTodoList();
    setTodo('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} css={formContainer({ isMobile })}>
        <Input
          width="100%"
          height={isMobile ? '40px' : '50px'}
          bdColor="var(--bd)"
          fcBdColor="var(--main)"
          data-testid="new-todo-input"
          aria-label="new-todo-input"
          value={todo}
          onChange={handleChange}
        />
        <Button
          text={isMobile ? undefined : 'Add'}
          fontSize="20px"
          height={isMobile ? '40px' : '50px'}
          colGap="0"
          padding={isMobile ? '0' : '20px'}
          color="#fff"
          hvColor="var(--main)"
          bgColor="var(--main)"
          hvBgColor="var(--mainOp2)"
          center
          data-testid="new-todo-add-button"
          Icon={RiAddFill}
        />
      </form>
    </div>
  );
}

const formContainer = ({ isMobile }: IsResponsive) => css`
  display: grid;
  grid-template-columns: 1fr ${isMobile ? '40px' : '120px'};
  column-gap: ${isMobile ? '8px' : '16px'};
  & input {
    font-size: var(--fontSm);
  }
`;

export default TodoCreate;
