import { z } from 'zod';

export const idSchema = z.object({ id: z.string().cuid() });

export type IdData = z.infer<typeof idSchema>;

export const createTodoSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
});

export type CreateTodoData = z.infer<typeof createTodoSchema>;

export const updateTodoSchema = z.object({
  id: z.string().cuid(),
  title: z.string().optional(),
  content: z.string().optional(),
});

export type UpdateTodoData = z.infer<typeof updateTodoSchema>;
