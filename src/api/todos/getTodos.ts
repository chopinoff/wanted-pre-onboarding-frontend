import axios from '../instance';

async function getTodos() {
  try {
    const { data } = await axios.get('/todos');
    return data;
  } catch {
    alert('오류가 발생했습니다. 다시 시도해주세요.');
    return null;
  }
}

export default getTodos;
