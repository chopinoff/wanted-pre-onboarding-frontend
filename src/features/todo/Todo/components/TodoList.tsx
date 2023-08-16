import React, { Dispatch, SetStateAction } from 'react';
import TodoItem from './TodoItem';
import { TodosResult } from 'types/todoTypes';
import TodoSelectDelete from './TodoSelectDelete';
import { GoSmiley } from 'react-icons/go';
import { css } from '@emotion/react';

interface Props {
  todoList: TodosResult[];
  getTodoList: () => Promise<void>;
  setTodoList: Dispatch<SetStateAction<TodosResult[]>>;
}

function TodoList({ todoList, getTodoList, setTodoList }: Props) {
  return (
    <>
      <TodoSelectDelete {...{ todoList, setTodoList }} />
      <ul>
        {todoList?.map(({ id, todo, isCompleted }) => (
          <TodoItem key={id} {...{ id, todo, isCompleted, getTodoList }} />
        ))}
        {todoList?.length === 0 && (
          <div css={noTodoContainer}>
            <GoSmiley size={24} />
            <p>작성된 목록이 없습니다</p>
          </div>
        )}
      </ul>
    </>
  );
}

const noTodoContainer = css`
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & p {
    margin-top: 20px;
  }
`;

export default TodoList;
