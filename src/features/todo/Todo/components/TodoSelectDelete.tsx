import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import updateTodoById from 'api/todo/updateTodoById';
import deleteTodoById from 'api/todo/deleteTodoById';
import { TodosResult } from 'types/todoTypes';

interface Props {
  todoList: TodosResult[];
  setTodoList: Dispatch<SetStateAction<TodosResult[]>>;
}

function TodoSelectDelete({ todoList, setTodoList }: Props) {
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
    <div>
      <input type="checkbox" id="checkbox-total" checked={isChecked} onChange={handleClickCheckbox} />
      <label htmlFor="checkbox-total">{isChecked ? '전체 완료 해제' : '전체 완료'}</label>
      <button onClick={handleClickDelete}>완료 목록 삭제</button>
    </div>
  );
}

export default TodoSelectDelete;
