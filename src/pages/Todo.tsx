import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoCreate from '../components/todo/TodoCreate';
import TodoHeader from '../components/todo/TodoHeader';
import TodoList from '../components/todo/TodoList';
import getTodos from '../api/todo/getTodos';
import { TodosResult } from '../types/todoTypes';

function Todo() {
  const accessToken = window.localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<TodosResult[] | undefined>();

  const getTodoList = useCallback(async () => {
    const data = await getTodos();
    if (data !== null) {
      setTodoList(data);
    }
  }, []);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  useEffect(() => {
    if (!accessToken) {
      navigate('/signin');
      alert('로그인이 필요한 서비스입니다.');
    }
  }, [navigate, accessToken]);

  return (
    <>
      {accessToken && (
        <div>
          <TodoHeader />
          <TodoCreate {...{ getTodoList }} />
          <TodoList {...{ getTodoList, todoList }} />
        </div>
      )}
    </>
  );
}

export default Todo;
