import TodoForm from '@/components/todo-form';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/todos/create')({
  component: TodoCreate,
});

function TodoCreate() {
  return <TodoForm />;
}
