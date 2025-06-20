import type { Todo } from '@/generated/zod';
import { prisma } from '@/lib/db';
import {
  createTodoSchema,
  idSchema,
  updateTodoSchema,
  type CreateTodoData,
  type IdData,
  type UpdateTodoData,
} from '@/validations/todos';
import { createServerFn } from '@tanstack/react-start';

/*************
 * Get Todos *
 ************/

const getTodosHandler = async (): Promise<Array<Todo>> =>
  await prisma.todo.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const getTodos = createServerFn({
  method: 'GET',
}).handler(getTodosHandler);

/******************
 * Get Todo By ID *
 *****************/

const getTodoHandler = async ({
  data,
}: {
  data: IdData;
}): Promise<Todo | null> =>
  await prisma.todo.findUnique({
    where: { id: data.id },
  });

export const getTodoById = createServerFn({
  method: 'GET',
})
  .validator(idSchema)
  .handler(getTodoHandler);

/***************
 * Create Todo *
 **************/

const createTodoHandler = async ({
  data,
}: {
  data: CreateTodoData;
}): Promise<Todo> =>
  await prisma.todo.create({
    data: {
      title: data.title,
      content: data.content,
    },
  });

export const createTodo = createServerFn({
  method: 'POST',
})
  .validator(createTodoSchema)
  .handler(createTodoHandler);

/***************
 * Update Todo *
 **************/

const updateTodoHandler = async ({
  data,
}: {
  data: UpdateTodoData;
}): Promise<Todo> =>
  await prisma.todo.update({
    where: { id: data.id },
    data: { title: data.title, content: data.content },
  });

export const updateTodo = createServerFn({
  method: 'POST',
})
  .validator(updateTodoSchema)
  .handler(updateTodoHandler);

/***************
 * Delete Todo *
 **************/

const deleteTodoHandler = async ({ data }: { data: IdData }): Promise<Todo> =>
  await prisma.todo.delete({
    where: { id: data.id },
  });

export const deleteTodo = createServerFn({
  method: 'POST',
})
  .validator(idSchema)
  .handler(deleteTodoHandler);
