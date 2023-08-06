interface TodosPayload {
  todo?: string;
  isCompleted?: boolean;
  id?: number;
}

interface TodosResult extends TodosPayload {
  id: number;
  userId?: number;
}

export type { TodosPayload, TodosResult };
