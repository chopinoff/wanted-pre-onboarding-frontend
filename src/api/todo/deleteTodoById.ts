import axios from '../instance';
import { TodosPayload } from '../../types/todoTypes';

async function deleteTodoById({ id }: TodosPayload) {
  try {
    const { data } = await axios().delete(`/todos/${id}`);
    return data;
  } catch {
    alert('오류가 발생했습니다. 다시 시도해주세요.');
    return null;
  }
}

export default deleteTodoById;
