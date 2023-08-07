import { useNavigate } from 'react-router-dom';
import WriteTodoForm from '../components/todos/WriteTodoForm';
import TodoItemList from '../components/todos/TodoItemList';
import { useEffect } from 'react';

function Todo() {
  const accessToken = window.localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/signin');
      alert('로그인이 필요한 서비스입니다.');
    }
  });

  return (
    <>
      {accessToken && (
        <div>
          <h2>Todo</h2>
          <WriteTodoForm />
          <TodoItemList />
        </div>
      )}
    </>
  );
}

export default Todo;
