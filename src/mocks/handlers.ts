import { http, HttpResponse } from 'msw';
import people from './auth.json';
import todos from './todos.json';

const BASE_API_URL = process.env.REACT_APP_API_BASE_URL;

export const handlers = [
  http.post(`${BASE_API_URL}auth/signup`, async ({ request }) => {
    const newAuth = (await request.json()) as { email: string; password: string };
    // console.log(newAuth);
    if (!people.some((obj) => obj.email === newAuth.email)) {
      people.push({
        userId: people.length + 1,
        email: newAuth.email,
        password: newAuth.password,
      });
      return HttpResponse.json(newAuth, { status: 201 });
    } else return HttpResponse.json({}, { status: 401 });
  }),
  http.post(`${BASE_API_URL}auth/signin`, async ({ request }) => {
    const newAuth = (await request.json()) as { email: string; password: string };
    if (people.some((obj) => obj.email === newAuth.email && obj.password === newAuth.password)) {
      return HttpResponse.json({ access_token: newAuth.email }, { status: 201 });
    } else return HttpResponse.json({}, { status: 401 });
  }),
  http.get(`${BASE_API_URL}todos`, async () => {
    if (todos) {
      return HttpResponse.json(todos, { status: 201 });
    } else return HttpResponse.json({}, { status: 401 });
  }),
  http.post(`${BASE_API_URL}todos`, async ({ request }) => {
    const newTodo = (await request.json()) as { todo: string };
    todos.push({ userId: 1, id: todos.length + 1, isCompleted: false, todo: newTodo.todo });
    return HttpResponse.json(todos, {
      status: 201,
    });
  }),
  http.put(`${BASE_API_URL}todos/:id`, async ({ params, request }) => {
    const { id } = params;
    const updatedTodo = (await request.json()) as { id: number; isCompleted: boolean; todo: string };
    const idx = todos.findIndex((x) => x.id === Number(id));
    todos[idx] = { userId: 1, id: Number(id), isCompleted: updatedTodo.isCompleted, todo: updatedTodo.todo };
    return HttpResponse.json(updatedTodo, {
      status: 201,
    });
  }),
  http.delete(`${BASE_API_URL}todos/:id`, async ({ params }) => {
    const { id } = params;
    const idx = todos.findIndex((x) => x.id === Number(id));
    todos.splice(idx, 1);
    return HttpResponse.json(todos, {
      status: 201,
    });
  }),
];
