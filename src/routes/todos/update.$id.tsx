import TodoForm from '@/components/todo-form';
import { getTodoById } from '@/lib/serverFns';
import type { TodoUpdateInput } from '@/validations/todos';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/todos/update/$id')({
  loader: async ({ params: { id } }) => await getTodoById({ data: { id } }),
  component: TodoUpdate,
});

function TodoUpdate() {
  const { id } = Route.useParams();
  const todo =
    id === 'new' ? undefined : (Route.useLoaderData() as TodoUpdateInput);
  return <TodoForm todo={todo} />;
}
