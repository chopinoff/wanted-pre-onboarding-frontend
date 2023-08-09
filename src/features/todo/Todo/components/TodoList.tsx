import TodoItem from './TodoItem';
import { TodosResult } from 'types/todoTypes';
import TodoSelectDelete from './TodoSelectDelete';

interface Props {
  todoList: TodosResult[] | undefined;
  getTodoList: () => Promise<void>;
}

function TodoList({ todoList, getTodoList }: Props) {
  return (
    <>
      <TodoSelectDelete {...{ todoList, getTodoList }} />
      <ul>
        {todoList?.map(({ id, todo, isCompleted }) => (
          <TodoItem key={id} {...{ id, todo, isCompleted, getTodoList }} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
