// src/routes/index.tsx
import { Button } from '@/components/ui/button';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const handleClick = () => {};

  return (
    <div className='flex items-center justify-center flex-col h-screen gap-4'>
      <h1 className='text-xl font-semibold'>Notes made for Developers</h1>
      <Link to='/todos'>
        <Button variant='link' onClick={handleClick} size='sm'>
          Go to Notes
        </Button>
      </Link>
    </div>
  );
}
