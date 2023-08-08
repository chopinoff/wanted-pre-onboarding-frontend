import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WriteTodoForm from '../components/todos/WriteTodoForm';
import TodoItemList from '../components/todos/TodoItemList';
import getTodos from '../api/todos/getTodos';
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
          <h2>Todo</h2>
          <WriteTodoForm {...{ handleTodoList: getTodoList }} />
          <TodoItemList {...{ handleTodoList: getTodoList, todoList }} />
        </div>
      )}
    </>
  );
}

export default Todo;
