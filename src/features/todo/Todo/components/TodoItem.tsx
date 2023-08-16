import React, { ChangeEvent, useState } from 'react';
import updateTodoById from 'api/todo/updateTodoById';
import { TodosResult } from 'types/todoTypes';
import TodoDefault from './TodoDefault';
import TodoUpdate from './TodoUpdate';
import { css } from '@emotion/react';
import useResponsive from 'hooks/useResponsive';

interface Props extends TodosResult {
  getTodoList: () => Promise<void>;
}

function TodoItem({ id, todo, isCompleted, getTodoList }: Props) {
  const { isMobile } = useResponsive();
  const [isModifying, setIsModifying] = useState(false);

  async function handleClickCheckbox(event: ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    await updateTodoById({ todo, isCompleted: checked, id });
    getTodoList();
  }

  return (
    <li css={itemContainer(isModifying, isMobile)}>
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        aria-label="checkbox"
        checked={isCompleted}
        onChange={handleClickCheckbox}
        css={checkBoxContainer(isMobile)}
      />
      {isModifying ? (
        <TodoUpdate {...{ id, todo, isCompleted, getTodoList, setIsModifying }} />
      ) : (
        <TodoDefault {...{ id, todo, isCompleted, getTodoList, setIsModifying }} />
      )}
    </li>
  );
}

const itemContainer = (isModifying: boolean, isMobile?: boolean) => css`
  display: grid;
  grid-template-columns: ${isMobile
    ? isModifying
      ? '40px 1fr'
      : '40px 1fr 40px 40px'
    : isModifying
    ? '50px 1fr'
    : '50px 1fr 60px 60px'};
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: ${isMobile ? '20px 4px 20px 0' : '30px 10px 30px 0'};
  border-bottom: 1px solid var(--bd2);
`;

const checkBoxContainer = (isMobile?: boolean) => css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  width: ${isMobile ? '20px' : '24px'};
  height: ${isMobile ? '20px' : '24px'};
  outline: 0;
  background-color: var(--bg2);
  position: relative;
  border-radius: 4px;
  &::before {
    content: '';
    background-image: url('assets/images/checkbox-fill.png');
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.3;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  &::after {
    border: solid #fff;
    border-width: 0 2px 2px 0;
    content: '';
    display: none;
    height: 40%;
    left: 40%;
    position: relative;
    top: 20%;
    transform: rotate(45deg);
    width: 15%;
  }
  &:checked {
    background: var(--main);
    border: none;
  }
  &:checked::after {
    display: block;
  }
`;
export default TodoItem;
