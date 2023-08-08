import TodoItem from './TodoItem';
import { TodosResult } from '../../types/todoTypes';

interface Props {
  todoList: TodosResult[] | undefined;
  handleTodoList: () => Promise<void>;
}

function TodoItemList({ todoList, handleTodoList }: Props) {
  return (
    <ul>
      {todoList?.map(({ id, todo, isCompleted }) => (
        <TodoItem key={id} {...{ id, todo, isCompleted, handleTodoList }} />
      ))}
    </ul>
  );
}

export default TodoItemList;
