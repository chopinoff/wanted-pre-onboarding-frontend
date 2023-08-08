import { useState, ChangeEvent, FormEvent } from 'react';
import createTodo from 'api/todo/createTodo';

interface Props {
  getTodoList: () => Promise<void>;
}

function TodoCreate({ getTodoList }: Props) {
  const [todo, setTodo] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setTodo(value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    todo && (await createTodo({ todo }));
    getTodoList();
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

export default TodoCreate;
