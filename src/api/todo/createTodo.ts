import axios from 'api/instance';
import { TodosPayload } from 'types/todoTypes';

async function createTodo({ todo }: TodosPayload) {
  try {
    const { data } = await axios().post('/todos', {
      todo,
    });
    return data;
  } catch {
    alert('오류가 발생했습니다. 다시 시도해주세요.');
    return null;
  }
}

export default createTodo;
