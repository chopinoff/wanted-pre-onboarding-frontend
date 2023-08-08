import TodoItem from './TodoItem';
import { TodosResult } from 'types/todoTypes';

interface Props {
  todoList: TodosResult[] | undefined;
  getTodoList: () => Promise<void>;
}

function TodoListView({ todoList, getTodoList }: Props) {
  return (
    <ul>
      {todoList?.map(({ id, todo, isCompleted }) => <TodoItem key={id} {...{ id, todo, isCompleted, getTodoList }} />)}
    </ul>
  );
}

export default TodoListView;
