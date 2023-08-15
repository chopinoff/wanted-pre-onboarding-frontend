import React, { Dispatch, SetStateAction } from 'react';
import TodoItem from './TodoItem';
import { TodosResult } from 'types/todoTypes';
import TodoSelectDelete from './TodoSelectDelete';

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
      </ul>
    </>
  );
}

export default TodoList;
