import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import updateTodoById from 'api/todo/updateTodoById';
import deleteTodoById from 'api/todo/deleteTodoById';
import { TodosResult } from 'types/todoTypes';
import { css } from '@emotion/react';
import useResponsive from 'hooks/useResponsive';
import { RiDeleteBin5Line } from 'react-icons/ri';

interface Props {
  todoList: TodosResult[];
  setTodoList: Dispatch<SetStateAction<TodosResult[]>>;
}

function TodoSelectDelete({ todoList, setTodoList }: Props) {
  const { isMobile } = useResponsive();
  const [isChecked, setIsChecked] = useState(false);

  function updateAllTodos(isChecked: boolean) {
    todoList?.map(({ todo, id }) => updateTodoById({ todo, isCompleted: isChecked, id }));
  }

  function deleteCompletedTodos(completedIds: number[]) {
    completedIds?.map((id) => deleteTodoById({ id }));
  }

  function filterAndExtractIds() {
    const completedIds: number[] = [];
    const newTodoList = todoList.filter(({ isCompleted, id }) => {
      isCompleted && completedIds.push(id);
      return !isCompleted;
    });
    return { completedIds, newTodoList };
  }

  function handleClickCheckbox() {
    const newTodoList = todoList?.map((todo) => {
      return { ...todo, isCompleted: !isChecked };
    });
    setTodoList(newTodoList);
    updateAllTodos(!isChecked);
  }

  function handleClickDelete() {
    const { completedIds, newTodoList } = filterAndExtractIds();
    setTodoList(newTodoList);
    deleteCompletedTodos(completedIds);
  }

  function isAllCompleted() {
    if (todoList.length > 0) {
      return todoList.every(({ isCompleted }) => isCompleted);
    } else return false;
  }

  useEffect(() => {
    setIsChecked(isAllCompleted());
  }, [todoList]);

  return (
    <div css={titleContainer(isMobile)}>
      <input
        type="checkbox"
        id="checkbox-total"
        checked={isChecked}
        onChange={handleClickCheckbox}
        css={checkBoxContainer(isMobile)}
      />
      <label htmlFor="checkbox-total">{isChecked ? '전체 완료 해제' : '전체 완료'}</label>
      <div></div>
      <button onClick={handleClickDelete}>{isMobile ? <RiDeleteBin5Line size={'1.2em'} /> : '완료 목록 삭제'}</button>
    </div>
  );
}

const titleContainer = (isMobile?: boolean) => css`
  height: 60px;
  margin-top: 30px;
  display: grid;
  align-items: center;
  border-bottom: 2px solid var(--bd2);
  grid-template-columns: ${isMobile ? '40px 90px auto 40px' : '50px 90px auto 120px'};
  & label,
  button {
    cursor: pointer;
    font-weight: 600;
    color: var(--text3);
    font-size: var(--fontSm);
  }
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

export default TodoSelectDelete;
