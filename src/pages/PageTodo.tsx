import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Todo from 'features/todo/Todo';

function PageTodo() {
  const accessToken = window.localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/signin');
      alert('로그인이 필요한 서비스입니다.');
    }
  }, [navigate, accessToken]);

  return accessToken ? <Todo /> : <></>;
}

export default PageTodo;
