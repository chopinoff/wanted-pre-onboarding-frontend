import axios from '../instance';
import { TodosPayload } from '../../types/todoTypes';

async function updateTodoById({ id, todo, isCompleted }: TodosPayload) {
  try {
    const { data } = await axios().put(`/todos/${id}`, {
      todo,
      isCompleted,
    });
    return data;
  } catch {
    alert('오류가 발생했습니다. 다시 시도해주세요.');
    return null;
  }
}

export default updateTodoById;
