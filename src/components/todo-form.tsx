import { CreateTodo, UpdateTodo } from '@/lib/serverFns';
import type { TodoCreateInput, TodoUpdateInput } from '@/validations/todos';
import { useMemo, useState, type FormEvent } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type TodoFormProps = {
  todo?: TodoUpdateInput; // Only passed for update operations
};

const TodoForm = ({ todo }: TodoFormProps) => {
  // Check if this is an update operation and initialize form data in one step
  const isUpdateOperation = useMemo(() => todo !== undefined, [todo]);

  const initTodo = useMemo(() => {
    return isUpdateOperation
      ? (todo as TodoUpdateInput)
      : ({
          data: {
            title: '',
            content: '',
            completed: false,
          },
        } as TodoCreateInput);
  }, [todo, isUpdateOperation]);

  const [todoData, setTodoData] = useState(initTodo);

  const changeValue = (name: string, value: string) => {
    setTodoData((prev) => ({
      ...prev,
      data: { ...prev.data, [name]: value },
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isUpdateOperation) {
      await UpdateTodo(todoData as TodoUpdateInput);
    } else {
      await CreateTodo(todoData as TodoCreateInput);
    }
  };

  return (
    <div>
      <h1 className='text-3xl font-bold mb-4'>
        {isUpdateOperation ? 'Update Todo' : 'Create Todo'}
      </h1>
      <form className='flex flex-col p-2 gap-2' onSubmit={handleSubmit}>
        {isUpdateOperation && (
          <Input type='hidden' value={todoData.data.id as string} />
        )}
        <Input
          className='border border-gray-300 rounded-md p-4 bg-card'
          placeholder='Title'
          name='title'
          value={todoData.data.title as string}
          onChange={(e) => changeValue('title', e.target.value)}
        />
        <textarea
          className='w-full min-h-[500px] border border-gray-300 rounded-md p-2 bg-card resize-none'
          placeholder='Content'
          value={(todoData.data.content as string) || ''}
          onChange={(e) => changeValue('content', e.target.value)}
        />
        <Button type='submit' className='bg-primary text-white'>
          {isUpdateOperation ? 'Update' : 'Create'}
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
