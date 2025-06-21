import { Button } from '@/components/ui/button';
import { getTodos } from '@/lib/serverFns';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Plus } from 'lucide-react';

export const Route = createFileRoute('/todos/')({
  loader: async () => await getTodos(),
  component: TodosComponent,
});

function TodosComponent() {
  const todos = Route.useLoaderData();
  return (
    <div className='flex justify-start items-start flex-col h-screen gap-4 mt-8 mx-8'>
      <div className='flex justify-between items-baseline w-full gap-2'>
        <h1 className='text-2xl font-semibold'>Todos</h1>
        <Link to='/todos/create'>
          <Button variant='outline' className='bg-secondary text-primary'>
            <Plus />
            Add Todo
          </Button>
        </Link>
      </div>
      {todos.map((todo) => (
        <Link
          key={todo.id}
          to='/todos/update/$id'
          params={{ id: todo.id }}
          from='/todos'
          className='text-blue-500 hover:font-bold bg-secondary'
        >
          {todo.title}
        </Link>
      ))}
    </div>
  );
}
