import { plugins } from '@/components/toolbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TodoCreateInputSchema } from '@/generated/zod';
import { getTodoById } from '@/lib/serverFns';
import { MDXEditor } from '@mdxeditor/editor';
import { createFileRoute } from '@tanstack/react-router';
import { useState, type ChangeEvent } from 'react';
import type z from 'zod';

export const Route = createFileRoute('/todos/$id')({
  loader: async ({ params: { id } }) => await getTodoById({ data: { id } }),
  component: RouteComponent,
});

type TodoCreateInput = z.infer<typeof TodoCreateInputSchema>;

function RouteComponent() {
  const todo = Route.useLoaderData();
  const initTodo = todo?.title ? todo : { title: '', content: '' };
  const [todoData, setTodoData] = useState<TodoCreateInput>(initTodo);

  const updateContent = (content: string) => {
    setTodoData((prev) => ({ ...prev, content }));
  };
  const updateTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { title } = e.target;
    setTodoData((prev) => ({ ...prev, title }));
  };

  //   const { id } = Route.useParams();
  //   const todo = todos.find((todo) => todo.id === id);
  return (
    <div className='flex flex-col p-2 gap-2'>
      <Input
        className='border border-gray-300 rounded-md p-4 bg-card'
        placeholder='Title'
        value={todoData.title}
        onChange={updateTitle}
      />
      <MDXEditor
        markdown={todoData.content ?? ''}
        contentEditableClassName='prose'
        plugins={plugins}
        className='w-full min-h-[500px] border border-gray-300 rounded-md p-2 bg-card'
        placeholder='Content'
        onChange={updateContent}
      />
      <Button size='lg' className='bg-primary text-white'>
        Save
      </Button>
    </div>
  );
}
