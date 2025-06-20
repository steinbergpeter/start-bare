import { Link } from '@tanstack/react-router';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function NavigationBar() {
  return (
    <NavigationMenu
      viewport={false}
      className='min-w-full font-semibold text-white bg-primary m-0 py-4 px-10 shadow-lg flex justify-between items-center list-none'
    >
      <NavigationMenuItem>
        <Link to='/'>Home</Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to='/todos'>Notes</Link>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
