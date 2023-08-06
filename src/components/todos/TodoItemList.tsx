import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import getTodos from '../../api/todos/getTodos';
import { TodosResult } from '../../types/todoTypes';

function TodoItemList() {
  const [todoList, setTodoList] = useState<TodosResult[] | undefined>();

  async function getTodoList() {
    const data = await getTodos();
    data !== null && setTodoList(data);
  }

  useEffect(() => {
    getTodoList();
  });

  return (
    <ul>
      {todoList?.map((todoItem) => (
        <TodoItem key={todoItem.id} id={todoItem.id} todo={todoItem.todo} isCompleted={todoItem.isCompleted} />
      ))}
    </ul>
  );
}

export default TodoItemList;
