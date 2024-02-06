import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoCreate from './components/TodoCreate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import getTodos from 'api/todo/getTodos';
import { TodosResult } from 'types/todoTypes';

function Todo() {
  const accessToken = window.localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<TodosResult[]>([]);
  const [count, setCount] = useState(0);
  const [all, setAll] = useState(0);

  const getTodoList = useCallback(async () => {
    const data = await getTodos();
    if (data !== null) {
      // console.log(data);
      setTodoList(data);
    }
  }, []);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  useEffect(() => {
    let res = 0;
    let allRes = 0;
    todoList.map(({ isCompleted }) => {
      allRes += 1;
      if (isCompleted === true) {
        res += 1;
      }
    });
    setCount(res);
    setAll(allRes);
  }, [todoList]);

  useEffect(() => {
    if (!accessToken) {
      navigate('/signin');
      alert('로그인이 필요한 서비스입니다.');
    }
  }, [navigate, accessToken]);

  return (
    <div>
      <TodoHeader {...{ count, all }} />
      <TodoCreate {...{ getTodoList }} />
      <TodoList {...{ todoList, getTodoList, setTodoList }} />
    </div>
  );
}

export default Todo;
