import WriteTodoForm from '../components/todos/WriteTodoForm';
import TodoItemList from '../components/todos/TodoItemList';

function Todo() {
  return (
    <div>
      <h2>Todo</h2>
      <WriteTodoForm />
      <TodoItemList />
    </div>
  );
}

export default Todo;
