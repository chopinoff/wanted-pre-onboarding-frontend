import { useState, ChangeEvent, FormEvent } from 'react';
import postTodos from '../../api/todos/postTodos';

function CreateTodoForm() {
  const [todo, setTodo] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setTodo(value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    todo && postTodos({ todo });
    setTodo('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-testid="new-todo-input" value={todo} onChange={handleChange} />
        <button data-testid="new-todo-add-button">추가</button>
      </form>
    </div>
  );
}

export default CreateTodoForm;
