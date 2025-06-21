import {
  TodoCreateInputSchema,
  TodoUpdateInputSchema,
  type Todo,
} from '@/generated/zod';
import { prisma } from '@/lib/db';
import {
  idSchema,
  type IdData,
  type TodoCreateInput,
  type TodoCreateOutput,
  type TodoUpdateInput,
  type TodoUpdateOutput,
} from '@/validations/todos';
import { createServerFn } from '@tanstack/react-start';

/*****************
 * Get All Todos *
 *****************/

const getTodosHandler = async (): Promise<Array<Todo>> =>
  await prisma.todo.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const getTodos = createServerFn({
  method: 'GET',
}).handler(getTodosHandler);

/********************
 * Get A Todo By ID *
 ********************/

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
 ***************/

const TodoCreateHandler = async ({ data }: TodoCreateInput): TodoCreateOutput =>
  await prisma.todo.create({ data });

export const CreateTodo = createServerFn({
  method: 'POST',
})
  .validator(TodoCreateInputSchema)
  .handler(TodoCreateHandler);

/***************
 * Update Todo *
 ***************/

const TodoUpdateHandler = async ({
  data: { id, title, content, completed },
}: TodoUpdateInput): TodoUpdateOutput =>
  await prisma.todo.update({
    where: { id: id as string },
    data: { title, content, completed },
  });

export const UpdateTodo = createServerFn({
  method: 'POST',
})
  .validator(TodoUpdateInputSchema)
  .handler(TodoUpdateHandler);

/***************
 * Delete Todo *
 ***************/

const deleteTodoHandler = async ({ data }: { data: IdData }): Promise<Todo> =>
  await prisma.todo.delete({ where: { id: data.id } });

export const deleteTodo = createServerFn({
  method: 'POST',
})
  .validator(idSchema)
  .handler(deleteTodoHandler);
