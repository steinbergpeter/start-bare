import type {
  Todo,
  TodoCreateInputSchema,
  TodoUpdateInputSchema,
} from '@/generated/zod';
import { z } from 'zod';

/*** ID ****/

export const idSchema = z.object({ id: z.string().cuid() });

export type IdData = z.infer<typeof idSchema>;

/*** CREATE ****/
export const createTodoDataSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
});

export type TodoCreateInput = { data: z.infer<typeof TodoCreateInputSchema> };
export type TodoCreateOutput = Promise<Todo>;

/*** UPDATE ****/
export const updateTodoDataSchema = z.object({
  id: z.string().cuid(),
  title: z.string().optional(),
  content: z.string().optional(),
});

export type TodoUpdateInput = { data: z.infer<typeof TodoUpdateInputSchema> };
export type TodoUpdateOutput = Promise<Todo>;
